import React from 'react';
import menu from './menu';
import ItemCard from './components/itemCard'
import Button from './components/button'
import './App.css';

console.log(menu)
class App extends React.Component{
  constructor(){
    super()
    this.state = {
      data:menu,      //initial data to be rendered(the entire menu)
      categories:[],
      selectedCategory:"all"
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount(){
    const unique = menu.reduce((accumulator,element) => {
      if(accumulator.indexOf(element.category) === -1){
        accumulator.push(element.category)
    }
    return accumulator
},[])
    this.setState(
      {
        categories:unique
      }
    )
  }

  handleClick(category,selectedCategory){
    if(category === 'all'){
      this.setState(
        {
          data:menu,
          selectedCategory:'all'
        }
      )
    }
    else{
      const filter = menu.filter((element) => element.category === category)
      this.setState(
        {
          data:filter,
          selectedCategory:selectedCategory
        }
      )
    }
    
  }
  render(){
    return(
      <div className="main">
        <nav>
          <Button name="all" handleClick={this.handleClick} id="all" selectedCategory = {this.state.selectedCategory}/>
          {
            this.state.categories.map((element,index) => {
              return(
                <Button name={element} handleClick={this.handleClick} key={index} id={index} selectedCategory={this.state.selectedCategory}/>
              )
            })
          }
        </nav>
        {
          this.state.data.map((element,index) => {
            return(
              <ItemCard img={element.img} desc={element.desc} price={element.price} title={element.title} key={index} />
            )
          })
        }
      </div>
    )
    
  }
}



export default App;
