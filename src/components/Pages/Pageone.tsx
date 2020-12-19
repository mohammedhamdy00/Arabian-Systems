import * as React from 'react';
import { Link } from 'react-router-dom';
import LocalizedStrings, { LocalizedStringsMethods } from 'react-localization';
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
export class PageOne extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        let localen=JSON.parse(localStorage.getItem('english') || '{}');
        let loaclenglish=localen.slice(0,10);
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
        const size = 10;
        const engItems = this.state.engList?.slice(0, size)
         const arItems = this.state.arList?.slice(0, size)
        this.setState({ enlistItem: engItems, arlistItem: arItems })
        }

    public changeLaguage(languageKey: string) {
        let strings = new LocalizedStrings({
            en: this.state.enlistItem,
            ar: this.state.arlistItem,
        })

        strings.setLanguage(languageKey)
        let mapped = Object.values(strings);
        let list = mapped.slice(0, 10);
        this.setState({ values: list })
    }


    public render() {
        return (
            <div>
                <div className="langBtns">
                <button className="langBtn" onClick={() => this.changeLaguage(this.state.arabic)}>
                    <span>Ar</span>
                </button>
                <button className="langBtn" onClick={() => this.changeLaguage(this.state.english)}>
                    <span>En</span>
                </button>
                </div>
                {this.state.values ?
                    <div>
                        {this.state.values.map((i: any) =>
                            <div key={i.key}>
                                <label style={{ color: 'red', display: 'inline-block' }}> {i.key} </label> <p style={{ color: 'black', display: 'inline-block' }}>{i.value}</p>
                            </div>)}
                    </div> :
                    this.state.engList?.map((i: any) =>
                        <div key={i.key + '_L'}>
                            <label style={{ color: 'red', display: 'inline-block' }}> {i.key} </label> <p style={{ color: 'black', display: 'inline-block' }}>{i.value}</p>
                        </div>
                    )
                }
                <div>

                </div>
                <div className="pageBtns">
                <Link to={`pagetwo`} >
                    <button className="navBtn">
                        Go to Pagetwo
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