import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class Events extends Component {
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
            {/* Inicio - Lista de Eventos */}
            <View style={styles.rectNgulo1}>
              <View style={styles.ovalo}>
                <Text style={styles.info}>INFO</Text>
              </View>
            </View>
            {/* Fin - Lista de Eventos */}
            {/* En realidad, sólo necesitan el primero. Los siguientes dos son solamente de ejemplo. Se pueden eliminar */}
            {/* Para llenar dinámicamente con los eventos existentes, se debe iterar la Lista de Eventos según cuántos eventos devuelva la API */}
            <View style={styles.rectNgulo1}>
              <View style={styles.ovalo}>
                <Text style={styles.info}>INFO</Text>
              </View>
            </View>
            <View style={styles.rectNgulo1}>
              <View style={styles.ovalo}>
                <Text style={styles.info}>INFO</Text>
              </View>
            </View>
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
              <Image
                style={styles.imgUsuario}
                source={require('../Img/ComponentTMP_1-image2.png')}
              />
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
    alignContent: 'space-around',
  },
  view3: {
    alignSelf: 'auto',
    position: 'relative',
    justifyContent: 'space-around',
    flex: 2,
    flexDirection: 'column',
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
  ovalo: {
    width: 59,
    height: 21,
    borderRadius: 11,
    backgroundColor: '#e96c2f',
    justifyContent: 'center',
    alignItems: 'center',
  },
  info: {
    width: 25,
    height: 15,
    color: '#ffffff',
    fontFamily: 'Segoe UI',
    fontSize: 11,
    fontWeight: '400',
    margin: 7,
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
