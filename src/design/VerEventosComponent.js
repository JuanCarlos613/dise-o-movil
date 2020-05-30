import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableHighlight,
  ScrollView,
  Dimensions,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class VerEventos extends Component {
  render() {
    return (
      <View>
        {/* Inicio View Superior */}
        <View style={styles.view1}>
          {/* Barra superior */}
          <View style={styles.rectNgulo}>
            <View style={styles.elipse2}>
              <Image
                style={styles.e4}
                source={require('../Img/ComponentTMP_1-image.png')}
              />
            </View>
            <Text style={styles.usuario}>@Usuario</Text>
          </View>
          {/* Fin de la barra superior */}
        </View>
        {/* Fin de View superior */}
        {/* Inicio View Scroll lateral */}
        <View style={styles.view2}>
          <ScrollView contentContainerStyle={styles.view3}>
            <View style={styles.rectNgulo1} />
            <View>
              {/* Espacio de Información del Evento */}
              <Text style={styles.contenido}>NOMBRE DEL EVENTO</Text>
              <Text style={styles.contenido}>ORGANIZADORES</Text>
              <Text style={styles.contenido}>FECHA HORA</Text>
              <Text style={styles.contenido}>PRECIO</Text>
              <Text style={styles.contenido}>LUGARES</Text>
              {/* En estos campos se deben mostrar los valores devueltos por la API */}
            </View>
            <View style={styles.view4}>
              <TouchableHighlight style={styles.asistir}>
                <Text style={styles.usuario}>ASISTIR</Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.disponibilidad}>
                <Text style={styles.usuario}>VER DISPONIBILIDAD</Text>
              </TouchableHighlight>
            </View>
            <View>
              <Text style={styles.contenido}>OTROS EVENTOS</Text>
            </View>
            <ScrollView>
              {/* Para mostrar los eventos dinámicamente solamente necesitan iterar según la cantidad de eventos que devuelva la API*/}
              <View style={styles.view5}>
                <View style={styles.cuadroMini} />
                <View style={styles.cuadroMini} />
              </View>
              {/* Las siguientes dos secciones son solo de relleno. Se pueden eliminar. */}
              <View style={styles.view5}>
                <View style={styles.cuadroMini} />
                <View style={styles.cuadroMini} />
              </View>
              <View style={styles.view5}>
                <View style={styles.cuadroMini} />
                <View style={styles.cuadroMini} />
              </View>
            </ScrollView>
          </ScrollView>
          <View style={styles.lateral}>
            {/* Botón de Menú */}
            <TouchableHighlight>
              <Image style={styles.menu} source={require('../Img/menu2.png')} />
            </TouchableHighlight>
            {/* Botón de Usuario */}
            <TouchableHighlight>
              <Image
                style={styles.imgUsuario}
                source={require('../Img/ComponentTMP_1-image.png')}
              />
            </TouchableHighlight>
            {/* Botón de Calendario */}
            <TouchableHighlight>
              <View style={styles.elipse3}>
                <Image
                  style={styles.imgUsuario}
                  source={require('../Img/ComponentTMP_1-image2.png')}
                />
              </View>
            </TouchableHighlight>
            {/* Botón de relojito */}
            <TouchableHighlight>
              <Image
                style={styles.imgUsuario}
                source={require('../Img/ComponentTMP_1-image3.png')}
              />
            </TouchableHighlight>
            {/* Botón listado */}
            <TouchableHighlight>
              <Image
                style={styles.libreta}
                source={require('../Img/ComponentTMP_1-image4.png')}
              />
            </TouchableHighlight>
          </View>
        </View>
        {/* Fin View Scroll lateral */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view1: {
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  view2: {
    flexDirection: 'row-reverse',
    alignContent: 'stretch',
  },
  view3: {
    position: 'relative',
    justifyContent: 'space-around',
    flex: 3,
  },
  view4: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  view5: {
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'relative',
    flexDirection: 'row',
  },
  rectNgulo: {
    width: wp('100%'),
    height: hp('12%'),
    backgroundColor: '#0d2b4f',
    alignItems: 'flex-end',
    flexDirection: 'row-reverse',
  },
  elipse2: {
    width: wp('11.5%'),
    height: hp('7.5%'),
    backgroundColor: '#3e6089',
    alignItems: 'center',
    borderRadius: 50,
    justifyContent: 'center',
  },
  elipse3: {
    width: wp('13.5%'),
    height: hp('8.5%'),
    backgroundColor: '#3e6089',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  e4: {
    width: 30,
    height: 30,
  },
  usuario: {
    width: 72,
    height: 20,
    color: '#ffffff',
    fontFamily: 'Segoe UI',
    fontSize: 14,
    fontWeight: '400',
  },
  contenido: {
    width: 72,
    height: 20,
    color: 'gray',
    fontFamily: 'Segoe UI',
    fontSize: hp('1.15%'),
    fontWeight: '400',
  },
  rectNgulo1: {
    position: 'relative',
    left: 50,
    height: 125,
    width: 230,
    borderColor: '#707070',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: '#ffffff',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  cuadroMini: {
    position: 'relative',
    height: hp('11%'),
    width: wp('25%'),
    borderColor: '#707070',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: '#ffffff',
  },
  asistir: {
    width: 114,
    height: 21,
    backgroundColor: '#b1e92f',
    borderRadius: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  disponibilidad: {
    width: 114,
    height: 21,
    backgroundColor: '#d6972b',
    borderRadius: 15,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  lateral: {
    width: hp('10%'),
    height: wp('129%'),
    backgroundColor: '#1f416a',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  imgUsuario: {
    width: wp('7.4%'),
    height: hp('4.8%'),
  },
  menu: {
    width: wp('7.4%'),
    height: hp('4.8%'),
  },
  libreta: {
    width: wp('10%'),
    height: hp('7.4%'),
  },
});
