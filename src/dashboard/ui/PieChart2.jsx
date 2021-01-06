import React, {useEffect, useState} from 'react';
import { connect } from "react-redux"
import { VictoryPie, VictoryChart, VictoryLegend, VictoryLabel , VictoryContainer, VictoryGroup} from 'victory';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Autocomplete } from '@material-ui/lab';


import { GetProducts } from '../../data-tables/use-cases/getProducts'

const useStyles = makeStyles({
    root: {
        // display: "flex",
        // minHeight: 800,
        // minWidth: 400,
        // width: 500,
    //   minWidth: 275,
    maxWidth: 500,
      backgroundColor: "white",
    //   justifyContent: "center"
    },
    // bullet: {
    //   display: 'inline-block',
    //   margin: '0 2px',
    //   transform: 'scale(0.8)',
    // },
    // title: {
    //   fontSize: 14,
    // },
    pos: {
      marginBottom: 12,
    },
    pita: {
        // display: "flex",
        // marginLeft: 35,
        // margin: (0, 'auto'),
    }
  });

  const data = [
    { x: "Necklaces", y: 35 },
    { x: "Bracelets", y: 40 },
    { x: "Earrings", y: 55 }
  ]

//   const data = [
//     { x: 1, y: 2 },
//     { x: 2, y: 2 },
//     { x: 3, y: 3 }
//   ];
//   const legendData = [{ name: "Necklaces" }, { name: "Bracelets" }, { name: "Rings" }];
  
const PieChart2 = ({getProducts, products}) => {
  const [loaded, setLoaded] = useState(false)

    
    const classes = useStyles();

    useEffect(() => {  
      getProducts()
    }, [])

    if (Object.keys(products).length>0) {
      let data = []
      for (const category in products){
        //data[category] = products[category].length
        let field = { x: `${category}: ${products[category].length} `, y: products[category].length}
        data.push(field)
      }
      console.log(data)
      return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h4" component="h2">
                    Silverthread Designs Products Sold by Category
                    {/* be{bull}nev{bull}o{bull}lent */}
                </Typography>
                <VictoryPie
                innerRadius={90}
                  data={data}
                  colorScale={["#78bfb5", "#f06292", "#b71c1c"]}
                  labelRadius={({ innerRadius }) => innerRadius + 50 }
                  style={{ labels: { fill: "black", fontWeight: "bold" } }}                // labelPlacement={"perpindicular"}
                  // labels={({ legendData }) => data.y}
                  // labelPosition={({ index }) => index
                  //     ? "centroid"
                  //     : "startAngle"
                  // }
                />
                
          </CardContent>
        </Card>
      )
    }
    else{
      return (
        <div></div>
      )
    }


}

const mapStateToProps = (state) => ({
  products: state.products.byCategories
})

const mapDispatchToProps = (dispatch) => ({
  getProducts: GetProducts(dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(PieChart2)

  