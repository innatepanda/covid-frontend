
import React from 'react'
import {
    Card, Button, CardImg, CardTitle, CardText,
    CardSubtitle, CardBody, ButtonGroup, CardFooter
  } from 'reactstrap';
  import './App.css';
var countries=[
    {
        name: 'India',
        img: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1599px-Flag_of_India.svg.png',
        cases: 2900,
        deaths: 900
    },
    {
        name: 'Italy',
        img: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/1024px-Flag_of_Italy.svg.png',
        cases: 900,
        deaths: 200
    },
]
class Countries extends React.Component{

        constructor(props)
        {
            super(props)
            this.state={
                selected: 'no',
                loading: true,
                countries: []
            }
        }

        componentDidMount(){
            this.setState({
                countries: countries
            })
        }
        render(){
            return(
                <div className="parent">
                    <ButtonGroup vertical className="btn-grp">
                    <Button onClick={()=>{
                                    this.setState({
                                    selected: 'no',
                                }, ()=>{

                                })
                                }}>
                                    
                                    View All
                                    
                                    </Button>
                    {
                        this.state.countries.map((country)=>{
                            return(
                                <Button onClick={()=>{
                                    this.setState({
                                    selected: country,
                                }, ()=>{

                                })
                                }}>
                                    
                                    {country.name}
                                    
                                    </Button>
                            )
                        })
                    }
        
                        
                    
                
                </ButtonGroup>
                
      
      
      
                
                {
                    this.state.selected==='no'?
                    <div className="card-grp">{
                    this.state.countries.map((country)=>{
                        return(
                            <Card className="country">
                            <CardImg top  src={country.img} alt="Card image cap" />
                            <CardBody>
                            <CardTitle tag="h5">{country.name}</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                            <CardText>{country.deaths}</CardText>
                            
                            
                        </CardBody>
                        <CardFooter>

                            
                            <Button onClick={()=>{
                                    this.setState({
                                    selected: country,
                                }, ()=>{

                                })
                                }}>
                                {country.name}</Button>
                                </CardFooter>
                            </Card>
                        )
                    })
                }
                    </div>:
                    <div>
                        <div>
                            <h5>{this.state.selected.name}</h5>
                            <p>{this.state.selected.cases}</p>
                        </div>
                    </div>
                }
                </div>
                
                
            )

            
        }
}

export default Countries;