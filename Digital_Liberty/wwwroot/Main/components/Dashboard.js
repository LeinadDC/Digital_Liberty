import React from 'react';
import CivilChart from './Charts/CivilChart';
import AgeChart from './Charts/AgeChart';
import ChildrenChart from './Charts/ChildrenChart';
import NationalityChart from './Charts/NationalityChart';
import ReferredChart from './Charts/ReferredChart';
import ProvinceChart from './Charts/ProvinceChart';
import ProblemChart from './Charts/ProblemChart';
import WorkChart from './Charts/WorkChart';
import ScholarshipChart from './Charts/ScholarshipChart';
import TotalBeneficiaries from './Dashboard/TotalBeneficiaries';
import TotalActive from './Dashboard/TotalActive';
import TotalInactive from './Dashboard/TotalInactive';
import TotalMale from './Dashboard/TotalMale';
import TotalFemale from './Dashboard/TotalFemale';
import { Link } from 'react-router-dom';
import Main from './Main';

export default class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {
            auth: true
        };
        this.signAlert = this.signAlert.bind(this);
    }


    componentDidMount() {
        const check = sessionStorage.getItem('token');
        if (check) {
            this.setState({ auth: false });
        } else {
            this.setState({ auth: true });
        }
    }
    signAlert() {
        return (
            <div>
                <h2>Debe iniciar sesion de nuevo</h2>
                <Link to={`/`}>
                    <button>Iniciar sesion</button>
                </Link>
            </div>
        );
    }

    render() {
        let contents = this.state.auth ? this.signAlert()
            : Dashboard.renderDashboard();

        return (<div>
            {contents}
        </div>);

    }

    static renderDashboard() {
        return (
            <div>
                <div className="row tile_count">
                    <TotalBeneficiaries />
                    <TotalActive />
                    <TotalInactive />
                    <TotalMale />
                    <TotalFemale />
                </div>
                <div className="row">
                    <div className=" col-md-6 col-sm-12 col-xs-12">
                        <CivilChart />
                    </div>
                    <div className=" col-md-6 col-sm-12 col-xs-12">
                        <AgeChart />
                    </div>
                    <div className=" col-md-4 col-sm-12 col-xs-12">
                        <ChildrenChart />
                    </div>
                    <div className=" col-md-4 col-sm-12 col-xs-12">
                        <ReferredChart />
                    </div>
                    <div className=" col-md-4 col-sm-12 col-xs-12">
                        <NationalityChart />
                    </div>
                    <div className=" col-md-12 col-sm-12 col-xs-12">
                        <ProvinceChart />
                    </div>
                    <div className=" col-md-4 col-sm-12 col-xs-12">
                        <ProblemChart />
                    </div>
                    <div className=" col-md-4 col-sm-12 col-xs-12">
                        <WorkChart />
                    </div>
                    <div className=" col-md-4 col-sm-12 col-xs-12">
                        <ScholarshipChart />
                    </div>
                </div>
            </div>);
    }
}
