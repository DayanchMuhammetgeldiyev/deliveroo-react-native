import {View, Text, ScrollView} from 'react-native'
import CategoryCard from './CategoryCard'

function categories() {
  return (
    <ScrollView
    contentContainerStyle={{
      paddingHorizontal: 10,
      paddingTop: 10,
    }}  
     horizontal
     showsHorizontalScrollIndicator={false}
    >
      <CategoryCard imgUrl="https://picsum.photos/id/237/200/300" title="Title1"/>
      <CategoryCard imgUrl="https://picsum.photos/id/237/200/300" title="Title2" />
      <CategoryCard imgUrl="https://picsum.photos/id/237/200/300" title="Title3"/>
      <CategoryCard imgUrl="https://picsum.photos/id/237/200/300" title="Title4"/>
      <CategoryCard imgUrl="https://picsum.photos/id/237/200/300" title="Title4"/>
      <CategoryCard imgUrl="https://picsum.photos/id/237/200/300" title="Title4"/>
    </ScrollView>
  )
}

export default categories