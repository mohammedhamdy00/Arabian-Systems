import * as React from 'react';
import './App.css';
import { Switch, Route, withRouter, RouteComponentProps } from 'react-router-dom';
import Home from './components/Home';
import { PageOne } from './components/Pages/Pageone';
import { PageTwo } from './components/Pages/Pagetwo';
import {Pagethree} from './components/Pages/Pagethree';
import "mdbreact/dist/css/mdb.css";
import axios from 'axios';
import "./components/Assets/css/generalStyle.scss"
interface Ienglish {
  key: string,
  value: string
}
interface Iarabic {
  key: string,
  value: string
}
interface IAppState {
  englishlist: Ienglish[]
  arabiclist: Iarabic[]
  ApiData: any
}
class App extends React.Component<RouteComponentProps<any>, IAppState> {
  constructor(props: RouteComponentProps) {
    super(props);
    this.state = {
      englishlist: [],
      arabiclist: [],
      ApiData: []
    }
  }
  public componentDidMount(): void {
    axios.get(`http://api.emiratesauction.com/v2/phrases?source=mweb`).then(data => {
      if (data.data.Phrases.length > 0) {
        this.setState({ ApiData: data.data.Phrases })
        const english = this.state.ApiData.map((i: any) =>
          this.state.englishlist.push(
            {
              key: i.key,
              value: i.en
            }
          )
          )

        const arabic = this.state.ApiData.map((i: any) =>
          this.state.arabiclist.push(
            {
              key: i.key,
              value: i.ar
            }
          ))
          localStorage.setItem("english", JSON.stringify(this.state.englishlist));
          localStorage.setItem("arabic", JSON.stringify(this.state.arabiclist));
      }
    })

  }

  public render() {
    return (
      <div>
        <Switch>
          <Route path={'/'} exact component={Home} />
          <Route path={'/pageone'} exact component={PageOne} />
          <Route path={'/pagetwo'} exact component={PageTwo} />
          <Route path={'/pagethree'} exact component={Pagethree} />
        </Switch>
      </div>
    );
  }
}
export default withRouter(App);