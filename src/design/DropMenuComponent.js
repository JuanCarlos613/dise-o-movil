import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableHighlight} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class DropMenu extends Component {
  render() {
    return (
      <View>
        {/* Inicio la barra Superior */}
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
          <View style={styles.lateral}>
            <View style={styles.view3}>
              {/* Botón de Menú */}
              <TouchableHighlight>
                <View style={styles.elipse3}>
                  <Image
                    style={styles.menu}
                    source={require('../Img/menu2.png')}
                  />
                </View>
              </TouchableHighlight>
              <Text style={styles.misEvnentos}> MENÚ </Text>
            </View>
            <View style={styles.view3}>
              {/* Botón de Usuario */}
              <TouchableHighlight>
                <Image
                  style={styles.imgUsuario}
                  source={require('../Img/ComponentTMP_1-image.png')}
                />
              </TouchableHighlight>
              <Text style={styles.misEvnentos}> MIS EVENTOS </Text>
            </View>
            <View style={styles.view3}>
              {/* Botón de Calendario */}
              <TouchableHighlight>
                <Image
                  style={styles.imgUsuario}
                  source={require('../Img/ComponentTMP_1-image2.png')}
                />
              </TouchableHighlight>
              <Text style={styles.misEvnentos}> VER EVENTOS </Text>
            </View>
            <View style={styles.view3}>
              {/* Botón de relojito */}
              <TouchableHighlight>
                <Image
                  style={styles.imgUsuario}
                  source={require('../Img/ComponentTMP_1-image3.png')}
                />
              </TouchableHighlight>
              <Text style={styles.misEvnentos}> RESERVAR </Text>
            </View>
            <View style={styles.view3}>
              {/* Botón listado */}
              <TouchableHighlight>
                <Image
                  style={styles.libreta}
                  source={require('../Img/ComponentTMP_1-image4.png')}
                />
              </TouchableHighlight>
              <Text style={styles.misEvnentos}> HISTORIAL </Text>
            </View>
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
    flexDirection: 'row',
    alignContent: 'stretch',
  },
  view3: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
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
  misEvnentos: {
    width: 85,
    height: 15,
    color: '#ffffff',
    fontFamily: 'Segoe UI',
    fontSize: 11,
    fontWeight: '300',
  },
  lateral: {
    width: hp('25%'),
    height: wp('129%'),
    backgroundColor: '#1f416a',
    justifyContent: 'space-around',
    flexDirection: 'column',
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
