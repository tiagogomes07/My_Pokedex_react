import React, { Component } from 'react';
import './App.css';
import pokemonservice from './service/pokemonservice'
import MyButton from './components/myButton';
import TableStyled from './components/tableStyled';
import Detail from './components/details';
import Bar from './components/bar';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


class App extends Component  {

  constructor(props){
    super(props)
    this.state = {
      pokemons : [],
      offset:0,
      limit:15,
      selected:'',
      details:{},
      abilities:[],
      img:''
    }    
    this.pokemonLoad = this.pokemonLoad.bind(this)
    this.getPokemonDetails = this.getPokemonDetails.bind(this)    
  }

  async pokemonLoad(){
    console.log("offset ",this.state.offset)
    let result = await pokemonservice.GetAllListPokemon(this.state.limit,this.state.offset)
    
    this.setState({pokemons:result.data.results})
  }

  componentDidMount(){
    this.pokemonLoad();
  }

  async nextPage(){
    let offset = this.state.offset;
    console.log(offset)
    let newNumber = this.state.offset + 20 ;
    console.log(newNumber)
    await this.setState({offset:newNumber})
    console.log("offset",this.state.offset) 
    this.pokemonLoad();
  }

  async previousPage(){
    if( this.state.offset >= this.state.limit){
      let newNumber = this.state.offset - 10 ;
      await this.setState({offset:newNumber})
      this.pokemonLoad();
    }
  }

  async getPokemonDetails(pokemonName){
      //console.log("pokemonName")
      this.setState({selected:pokemonName})
      let result = await pokemonservice.GetPokemonDetails(pokemonName)
      console.log(result)
      this.setState({abilities:result.data.abilities});
      this.setState({img:result.data.sprites.front_default})
  }

  render(){
    let self = this;
    return (
      <div className="App">
        <Bar title="The Pokedex Ultimate"/>
        <div className="App-body">        
           <Grid container spacing={1}>        
            <Grid item xs={5} sm={5}>
                <div style={ { width:500}}>
                      <TableStyled list={this.state.pokemons} getPokemonDetails={self.getPokemonDetails} />
                      <div style={{display:'flex'}}>
                          <a onClick={ () => { this.previousPage()} }>
                              <MyButton color='default' textButton='Previous'></MyButton>
                          </a>
                          <a onClick={ () => { this.nextPage()} } >
                              <MyButton color='default' textButton='Next'>Next</MyButton>
                          </a>
                      </div>
                </div>                 
            </Grid>
            <Grid item xs={3} sm={3}>
                    <Detail abilities={this.state.abilities} name={this.state.selected} img={this.state.img} />
            </Grid>        
          </Grid>            
         </div>        
       </div>
  );
 }


}

export default App;
