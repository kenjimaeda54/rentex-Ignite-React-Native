# rentex-Ignite-React-Native

Projeto aluguel de carros, consumindo API local.

## Tabelas de conteudos

- Visão geral
  - <a href='#Desafio' > Desafio </a>
  - <a href='#Construção' > Construção </a>
  - <a href="#Figma"> Figma </a>
  - <a href='#o-que-eu-aprendi' > Aprendizado </a>
  - <a href='#Feature' > Feature </a>
  - <a href='#Dependencias'> Dependencias </a>

## Visão Geral

## Desafio

- Consumir api local de aluguel de carros.

## Figma

- [figma](<https://www.figma.com/file/UQuhez6vG5kLn4164ljEGJ/RentX-Ignite-(Copy)?node-id=0%3A1>)

## Construção

- React
- Styled Component
- Type Script
- JSX

## O que eu aprendi

Fortaleci meus conhecimentos no consumo de API,type script,React Native é animações

Toda aplicação, foco foi em composição usando o principio design de Software Atomics [desing Atomics](https://atomicdesign.bradfrost.com/chapter-2/) </br>

Quando tem necessidade do componente ficar evidente independente do scroll,maneira simples e eficiente de realizar e colocar fora da scroll. Componente Content é scrollView,objetivo e manter
botão de confirmar "período do aluguel" sempre evidente,então construi uma view em torno fora da scroll view,assim sempre fica evidente botão.

```jsx
<Container>
  <Header>
    <BackButton onPress={handleGoBack} />
  </Header>
  <CardSliderImg>
    <CarSlider listImg={car.photos} />
  </CardSliderImg>
  <Content
    contentContainerStyle={{ paddingHorizontal: 24, alignItems: 'center' }}
    showsVerticalScrollIndicator={false}
  >
    <ViewCarDetails>
      <ViewDetails>
        <BrandText>{car.brand}</BrandText>
        <ModelText>{car.name}</ModelText>
      </ViewDetails>
      <ViewRente>
        <DayText>{car.rent.period}</DayText>
        <PriceText>R$ {car.rent.price}</PriceText>
      </ViewRente>
    </ViewCarDetails>
    <Accessories>
      {car.accessories.map((accessory) => (
        <Accessory
          name={accessory.name}
          key={accessory.type}
          icon={getIcons(accessory.type)}
        />
      ))}
    </Accessories>
    <AboutText>{car.about}</AboutText>
  </Content>
  <Footer>
    <Button
      description="Escolha período do aluguel"
      onPress={handleScheduling}
    />
  </Footer>
</Container>
```

Com !! determino que meu conteúdo vai ser um estado logico ou seja quando possuir conteúdo vai ser verdadeiro,quando não possuir vai ser falso. Interessante,porque assim evito criar novas constantes e reaproveito código

```jsx
<TextDate isDate={!!rentalPeriod.startDayFormatted}>
  {rentalPeriod.startDayFormatted}
</TextDate>
```

Aprendi conceitos novos e melhorei consumo de Api. Primeiro conceito é atualizar o json com o pedido do cliente. Primeiro recebo todas as datas ja cadastradas, para evitar sobrescrever os dados anteriores isso foi feito em "schedulesByCar" e em unavailable_dates eu construo um novo
array com tudo do anterior e coloco as novas data.</br>
Referencia aqui e feito pel car.id</br>
Para atualizar um json método usado e o put,primeiro eu paso o endereço que desejo atualizar apos isto passo o parâmetro. No meu caso parâmetro foi próprio car.id, dai atualizo o id que no casso foi o selecionado e coloco todas datas que foram registradas.
Com método post crio um novo recurso. Para meu caso de uso,setei o id do usuário no async storage,assim consigo recuperar ao longo da aplicação,apos isto verifico se possui um id registrado no async storage, caso possua,assumo que possui carros alugados pelo usuário,ja que com método post eu crio um novo recurso no json com id do usuário, objeto do carro e também as datas selecionado. Dentro do if faço esse controle,caso não possua um id e feito um post com esses recursos , caso possua faco um put para atualizar o recurso
Para realizar put,post,get precisa verifica na documentação se api possui esses recursos,neste caso usei o [json_server](https://www.npmjs.com/package/json-server) para simular uma api local

```typeScript
     async function handleSchedulingComplete() {
    setIsLoading(true);
    const schedulesByCar = await api.get(`/schedules_bycars/${car.id}`);
    const unavailable_dates = [
      ...schedulesByCar.data.unavailable_dates,
      ...date,
    ];
    api
      .put(`/schedules_bycars/${car.id}`, {
        id: car.id,
        unavailable_dates,
      })
      .then(async () => {
        const getUserId = await AsyncStorage.getItem(userId);
        const parseUserId = getUserId ? JSON.parse(getUserId!) : '';
        const carUserId = uuidV4();
        const rentalsAllPeriod = {
          car,
          carUserId,
          startDate: format(addDays(new Date(date[0]), 1), 'dd/MM/yy'),
          endDate: format(
            addDays(new Date(date[date.length - 1]), 1),
            'dd/MM/yy',
          ),
        };

        if (parseUserId === '') {
          const idUser = uuidV4();
          AsyncStorage.setItem(userId, JSON.stringify(idUser));
          await api.post('/schedules_byuser', {
            carByUser: [rentalsAllPeriod],
            user_id: idUser,
            id: idUser,
          });
          navigation.navigate('SchedulingComplete');
        } else {
          const getCars = await api.get(`/schedules_byuser/${parseUserId}`);
          const allRentalUser = [...getCars.data.carByUser, rentalsAllPeriod];
          await api.put(`/schedules_byuser/${parseUserId}`, {
            carByUser: allRentalUser,
            user_id: parseUserId,
            id: parseUserId,
          });
          navigation.navigate('SchedulingComplete');
        }
      })
      .catch((error) => Alert.alert(error));
  }

```

Para usar json-server primeiro precisa indicar aonde esta a sua api em formato json,apos isto precisa passar os parâmetros opcionais no caso usei ip da minha maquina,para poder testar no celular físico, nao usei localhost, porque expo encontra meu celular pelo ip, passei o parâmetro da porta e por fim delay para atrasar api

```json
  "api": "json-server ./src/utils/server.json --host 192.168.43.99 --port 3333 --delay 700"
```

Usei recurso interessante para realizar um slide dinâmico,ideia e conforme a lista renderiza novas imagens, reflete no canto superior uma barra de progresso,comum em alguns app que ao passar as imagens para lado,em cima uma bolinha fica escura.
Para realizar foi usado useRef,porque com ele consigo acessar diretamente o componente e também foi usado uma função do flatList "onViewableItemsChanged" esta função passa retorna callback o 'info',esse info e a posição que a imagem esta na sua lista.
Usando use ref e a tipagem consegui pegar a posição correta e passei para componente View Slider,
nesse componente eu passo uma props que ao ser verdadeira deixa opacidade em 1,
Repara que foi usado o [0],porque a ideia e pegar exatamente quando a imagem estar totalmente aparente

```typescript

interface ViewSliderProps {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}

export function CarSlider({ listImg }: CarSliderProps): JSX.Element {
  const [indexImg, setIndexImg] = useState(0);

  const handleVIew = useRef((info: ViewSliderProps) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const index = info.viewableItems[0].index!;
    setIndexImg(index);
  });
```

```jsx
  return (
    <Fragment>
      <ViewSlider numberSelected={indexImg} listImg={listImg} />
      <FlatList
        data={listImg}
        keyExtractor={(key) => key}
        renderItem={({ item }) => (
          //as vezes colocar uma view em torno auxilia na estilização
          <ImgWrap>
            <CarImg source={{ uri: item }} resizeMode="contain" />
          </ImgWrap>
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingRight: 47,
        }}
        onViewableItemsChanged={handleVIew.current}
      />
    </Fragment>
  );
}

/*---------------------------*/
export function ViewSlider({
  listImg,
  numberSelected,
}: listImgProps): JSX.Element {
  return (
    <Container>
      {listImg.map((__, index) => (
        <ViewSelected
          key={String(index)}
          isSelect={numberSelected === index ? true : false}
        />
      ))}
    </Container>
  );
}
```

Usei e abusei de uma lib muita boa para calendários,[calendars](https://github.com/wix/react-native-calendars), em baixo esta um exemplo de uso,pegando a data exata que o usuário colocou e o intervalo escolhido,foi usado também date fns para gerar os intervalos. Algumas
interfaces sao da propriá documentação como "MarkerDatesProps" que recebe um array de string;
ideia dentro de [date] e pegar o conteúdo dentro e nao o array.

```jsx
interface MarkerDatesProps {
  [date: string]: {
    textColor: string,
    color: string,
    disabled?: boolean,
    disabledTouchEvent?: boolean,
  };
}

interface DayProps {
  day: number;
  month: number;
  year: number;
  timestamp: number;
  dateString: string;
}

interface CalendarProps {
  markedDates: MarkerDatesProps;
  onDayPress: DateCallbackHandler;
}

function CustomCalendar({
  markedDates,
  onDayPress,
}: CalendarProps): JSX.Element {
  const { colors, fonts } = useTheme();
  return (
    <Container>
      <Calendar
        renderArrow={(direction) => (
          <Feather
            color={colors.text_detail}
            size={24}
            name={direction === 'left' ? 'chevron-left' : 'chevron-right'}
          />
        )}
        headerStyle={{
          borderBottomColor: colors.text_detail,
          borderBottomWidth: 0.5,
          paddingBottom: 10,
          marginBottom: 10,
        }}
        theme={{
          monthTextColor: colors.title,
          textMonthFontWeight: '600',
          textMonthFontFamily: fonts.archivo_600,
          textMonthFontSize: 20,
          dayTextColor: colors.title,
          textDayFontWeight: '400',
          textDayFontSize: 15,
          textDayFontFamily: fonts.inter_400,
        }}
        //dia 1 e para calendário iniciar em segunda,esta assim no design do figma
        firstDay={1}
        minDate={new Date()}
        markedDates={markedDates} //isto e um array correspondente ao marKingType
        markingType="period"
        onDayPress={onDayPress} //dia selecionado
      />
    </Container>
  );
}

export {
  DayProps,
  CalendarProps,
  CustomCalendar,
  MarkerDatesProps,
  getIntervalDays,
};
```

```jsx
export function Scheduling(): JSX.Element {
  function handleSchedulingDetails() {
    //preciso passar chaves para objeto via parâmetro,
    //car:car, date" Objet.Key()
    navigation.navigate('SchedulingDetails', {
      car,
      date: Object.keys(markDate),
    });
  }

  function handleChangeDate(date: DayProps) {
    let start = !lastDateSelected.timestamp ? date : lastDateSelected;
    //aqui garanto que sempre vai haver uma unica data clicado no meu estado,
    //esta data sempre sera o inicio dela,porque se nao houver data meu estado vai ser date
    // se houver sera o próprio estado
    let end = date;
    if (start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }
    setLastDateSelect(end);
    //função acima so estou tratando o primeiro dia clicado,sempre priorizando a data menor
    const interval = getIntervalDays(start, end);
    setMarkDate(interval);
    const startDay = Object.keys(interval)[0];
    const enDay = Object.keys(interval)[Object.keys(interval).length - 1]; //pegar todos objetos com chave final
    setRentalPeriod({
      startDayFormatted: format(addDays(new Date(startDay), 1), 'dd/MM/yy'),
      endDayFormatted: format(addDays(new Date(enDay), 1), 'dd/MM/yy'),
    });
  }

  return (
    <Content>
      <CustomCalendar
        markedDates={markDate}
        onDayPress={handleChangeDate}
        // função onDayPress  ja recebe um date ao clicar no calendário,então nao precisou
        //informar na função
      />
    </Content>
  );
}
```

# Feature

- Hooks
- styled component
- Atomics
- Media Screen
- Tipagem

### Dependências

- [App loading](https://docs.expo.io/versions/latest/sdk/app-loading/)
- [Google Fonts](https://docs.expo.io/guides/using-custom-fonts/#using-a-google-font)
- [Axios](https://github.com/axios/axios)
- [React Native](https://reactnavigation.org/docs/getting-started/)
- [Stack Stack](https://reactnavigation.org/docs/hello-react-navigation)
- [Calendars](https://github.com/wix/react-native-calendars)
- [Helpers X](https://github.com/ptelad/react-native-iphone-x-helper)
- [Svg Transformer](https://github.com/kristerkari/react-native-svg-transformer)
- [Responsive Font](https://www.npmjs.com/package/react-native-responsive-fontsize)
- [Json Server](https://www.npmjs.com/package/json-server)
- [Uuid ](https://github.com/uuidjs/uuid)
