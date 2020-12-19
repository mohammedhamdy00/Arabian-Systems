import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { MDBContainer, MDBRow } from 'mdbreact';
interface IState {


}
export default class Home extends React.Component<RouteComponentProps<any>, IState> {
    constructor(props: RouteComponentProps) {
        super(props);
        this.state = {
        }
    }
    public componentDidMount(): void {
    }

    public render() {
        return (
            <div>
                <MDBContainer className="homeContainer">
<MDBRow>
<div className="actionBtns">
<Link to={`pageone`} >
                        <button className="navBtn">
                            Go to Pageone
                    </button>
                    </Link>
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
                    </div>
</MDBRow>
                   
                </MDBContainer>

            </div>
        )
    }
}