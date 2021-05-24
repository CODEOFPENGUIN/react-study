import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { getChartDetail, getChartList } from './api/sing/api'
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Chart from './component/Chart'
import {useHistory} from 'react-router-dom'
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));


function Main() {

  const history = useHistory();
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const date = new Date();
  const textDate = date.getFullYear() + '년 ' + date.getMonth() + "월 " +  date.getDay() + '일 ' + date.getHours() + ":00" 
 
  const [chartList, setChartList] = useState([]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    if(newValue == 0) {
        getCharts('domestic')
    }else {
        getCharts('overseas')
    }
  };

  const getCharts = async (nara) => {
    const chartList = await getChartList(nara);
    console.log('chartList', chartList.chartList);
    setChartList(chartList.chartList);
  }

  const getDetail = async (id) => {
    // const chartDetail = await getChartDetail(id);
    // console.log('chartDetail', chartList.chart);
    history.push('/detail/' + id);
    
  }
  useEffect(() => {
    getCharts('domestic');
  }, [])

  return (
    <div className="App"> 
      <div style={{textAlign: "center"}}>
        <h2 >음악차트</h2>
        <span >{textDate}</span>
      </div>

       <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="국내" {...a11yProps(0)} />
          <Tab label="해외" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        { 
        // id, rank, title, singer, imageUrl
        chartList.length > 0 && chartList.map((chart, index) => 
          <div onClick={() => {getDetail(chart.id)}}>
            <Chart id={chart.id} imageUrl={'/img/' + chart.imageUrl} title={chart.title} singer={chart.singer}/>
          </div>)
        }
      </TabPanel>
      <TabPanel value={value} index={1}  >
      { 
        // id, rank, title, singer, imageUrl
        chartList.length > 0 && chartList.map((chart, index) => 
          <div onClick={() => {getDetail(chart.id)}}>
            <Chart id={chart.id} imageUrl={'/img/' + chart.imageUrl} title={chart.title} singer={chart.singer}/>
          </div>)
        }
      </TabPanel>
      </div>
    </div>
  );
}

export default Main;
