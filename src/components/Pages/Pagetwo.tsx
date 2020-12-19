import * as React from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import LocalizedStrings from 'react-localization';

export interface IState {
    enlistItem?: any[];
    arlistItem?: any[];
    english: string;
    arabic: string;
    values?: any;
    engList?: any;
    arList?: any[];

}
export interface IProps {

}
export class PageTwo extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        let localen=JSON.parse(localStorage.getItem('english') || '{}');
        let loaclenglish=localen.slice(10,20);
        let localar=JSON.parse(localStorage.getItem('arabic') || '{}');
        super(props);
        this.state = {
            english: 'en',
            arabic: 'ar',
            arList:localar,
            engList:loaclenglish
        }
    }
    componentDidMount(): void {
        const size = 20;
        const engItems = this.state.engList;
         const arItems = this.state.arList?.slice(10, size)
        this.setState({ enlistItem: engItems, arlistItem: arItems })
        }
    public changeLaguage(languageKey: string) {
        let strings = new LocalizedStrings({
            en: this.state.enlistItem,

            ar: this.state.arlistItem,
        })

        strings.setLanguage(languageKey)
        let mapped = Object.values(strings);
        let list = mapped.slice(0,10);
        this.setState({ values: list })
        
    }
    public render() {
       
        return (
            <div>
                <div className="langBtns">
                <button className="langBtn" onClick={() => this.changeLaguage(this.state.arabic)} >
                    <span>Ar</span>
                </button>
                <button className="langBtn" onClick={() => this.changeLaguage(this.state.english)} >
                    <span>En</span>
                </button>
                </div>
                {this.state.values ?
                    <div>
                        {this.state.values.map((i:any)=>
                            <div key={i.key}>
                        <label style={{ color: 'red', display: 'inline-block' }}> {i.key} </label> <p style={{ color: 'black', display: 'inline-block' }}>{i.value}</p>
                    </div>                            )}
                    </div>:
                    this.state.enlistItem?.map(i =>
                        <div key={i.key + '_L'}>
                            <label style={{ color: 'red', display: 'inline-block' }}> {i.key} </label> <p style={{ color: 'black', display: 'inline-block' }}>{i.value}</p>
                        </div>
                    )
                    }
                <div>

                </div>
                <div className="pageBtns">
                <Link to={`pageone`} >
                    <button className="navBtn">
                        Go to Pageone
                    </button>
                </Link>
                <Link to={`pagethree`} >
                    <button className="navBtn">
                        Go to Pagethree
                    </button>
                </Link>
                <Link to={`/`} >
                    <button className="navBtn">
                        Go to Home
                    </button>
                </Link>
                </div>
            </div>
        )


    }
}
