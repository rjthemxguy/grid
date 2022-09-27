import DataGrid, {FilterRow, HeaderFilter, SearchPanel, Column, MasterDetail} from 'devextreme-react/data-grid';
import { cdData } from './data/cd';
import 'devextreme/dist/css/dx.light.css';
import Detail from './components/Detail';
import './App.css';
import DiffCell from './components/diffCell';
import BaseCell from './components/BaseDiff';
import 'bootstrap/dist/css/bootstrap.min.css';





function App() {

  const columns = ['District', 'Name', 'Registered Voters', 'Baseline', 'Party'];

  return (
    <div className="container pt-4" >
      
      <DataGrid
        dataSource={cdData}
        //defaultColumns={columns}
        showBorders={true}
        rowAlternationEnabled={true}
      >
       <FilterRow visible={true}/>
       <HeaderFilter visible={true} />
       
        <Column dataField="District"
        width={100}
        allowFiltering={true}/>
        <Column dataField="Name"
        width={200}
        allowFiltering={true}/>
        
        <Column dataField="Baseline"
        width={100}
        allowFiltering={false}
        cellRender={BaseCell}
        />
         <Column dataField="Party"
        width={100}
        allowFiltering={true}
        cellRender={DiffCell}
        />
         <MasterDetail
          enabled={true}
          component={Detail}
        />
      </DataGrid>
    </div>
  );
}

export default App;
