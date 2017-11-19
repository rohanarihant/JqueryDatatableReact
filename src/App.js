import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Table from './table';
import $ from 'jquery';
$.DataTable = require('datatables.net');
class App extends Component {
      constructor(props) {
        super(props);
        this.state = {
            teamPlayes : [
            {playerName:'Rohit Sharma',age:'28',country:'India',score:'6972',average:'53.25'},
            {playerName:'Michel Clark',age:'32',country:'Australia',score:'7896',average:'58.65'},
            {playerName:'M.S Dhoni',age:'38',country:'India',score:'9876',average:'52.32'},
            {playerName:'Harbhajan Singh',age:'35',country:'India',score:'4432',average:'24.32'},
            {playerName:'Mohamad Yusuf',age:'37',country:'pakistan',score:'10424',average:'45.25'},
            {playerName:'A.B develierse',age:'32',country:'South Africa',score:'8765',average:'78.25'},
            {playerName:'Virat Kohli',age:'29',country:'India',score:'8014',average:'72.56'},
            {playerName:'Dwane Bravo',age:'34',country:'West Indies',score:'5676',average:'65.25'},
            {playerName:'Sachin Tendulkar',age:'41',country:'India',score:'14276',average:'74.56'},
            {playerName:'Adam Gilchrist',age:'39',country:'Australia',score:'9878',average:'85.26'},
            {playerName:'Chris Gayle',age:'35',country:'West Indies',score:'9123',average:'90.25'},
            {playerName:'Steve Waugh',age:'48',country:'Australia',score:'6672',average:'45.25'},
            {playerName:'Rahul Dravid',age:'42',country:'India',score:'10254',average:'44.63'},
            {playerName:'Inzamam Ul Haq',age:'45',country:'pakistan',score:'11458',average:'85.63'},
            {playerName:'Shahid Afridi',age:'40',country:'pakistan',score:'8965',average:'86.25'},
            {playerName:'Ricky Ponting',age:'38',country:'Australia',score:'8545',average:'78.45'},
            {playerName:'Kumar Sangakara',age:'39',country:'Shri Lanka',score:'9858',average:'65.25'},
            {playerName:'Suresh Raina',age:'32',country:'India',score:'6598',average:'78.25'},
            {playerName:'Ross Tailor',age:'34',country:'New Zeeland',score:'7454',average:'75.26'}
            ]
        }
        this.InitializeTable = this.InitializeTable.bind(this);
}
componentWillMount(){
    this.InitializeTable();
}
InitializeTable(){
         $(document).ready(function(){
        $('#requestTable').DataTable({
            scrollX : true,
            'deferRender': true,
            'pageLength':5,
            dom:'Bfrtip',
            buttons:[]
        });
    });

}
componentWillUpdate(){
        this.InitializeTable();
}

  render() {
    let that = this;
    return (
      <div className="App">
    <h2>JQuery DataTable in  React App</h2>
          <div className="App">
        <section className="tab-content">
                    <table id="requestTable" className="table table-bordered table-style" cellSpacing="0" width="100%">

                        <thead>
                            <tr>
                                        <th>PlayerName</th>
                                        <th>Age</th>
                                        <th>Country</th>
                                        <th>Score</th>
                                        <th>Average</th>
                                   
                            </tr>
                        </thead>
                        <tbody>
                            {that.state.teamPlayes.map((value, key) => {

                                return (
                                    <tr key={key}>
                                        <td>{value.playerName}</td>
                                        <td>{value.age}</td>
                                        <td>{value.country}</td>
                                        <td>{value.score}</td>
                                        <td>{value.average}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </section>
          
      </div>
      
      </div>
    );
  }
}

export default App;
