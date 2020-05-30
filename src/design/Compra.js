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