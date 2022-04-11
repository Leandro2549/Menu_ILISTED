import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {react} from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>

      <a href="#menu"  class="btnMenu btnMenu_open">menu </a>  
       <ul id="menu" class="menu Menu_open" >
         <li class="btnMenu btnMenu_close"> sair </li>
        <li class="menu-item">
       <a href="" class="Menu_item_action">Criar Listas </a> 
        </li>

        <li class="menu-item">
        <a href="" class="Menu_item_action">Listas </a> 
         </li>

         <li class="menu-item">
         <a href="" class="Menu_item_action">Minha Conta </a> 
         </li>
     </ul>
    </View>
  ); 
}
const menu = document.querySelector('menu')
const btnMenuOpen = document.querySelector('.btnMenu_open')
const btnMenuClose = document.querySelector('.btnMenu_close')

btnMenuOpen.addEventListener('click', function(){
 menu.classList.add('Menu_open')
})

btnMenuClose.addEventListener('click', function(){
  menu.classList.remove('Menu_open')
 })

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
