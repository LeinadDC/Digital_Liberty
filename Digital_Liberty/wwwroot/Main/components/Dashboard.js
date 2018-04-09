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
import TotalBeneficiaries from './Dashboard/TotalBeneficiaries'
import TotalActive from './Dashboard/TotalActive'
import TotalInactive from './Dashboard/TotalInactive'
import TotalMale from './Dashboard/TotalMale'
import TotalFemale from './Dashboard/TotalFemale'

export default class Dashboardx extends React.Component {
    render() {
        return (
            <div>
                    <div className="row tile_count">
                        <TotalBeneficiaries />
                        <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
                        <TotalActive />
                        </div>
                        <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
                        <TotalInactive />
                        </div>
                        <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
                        <TotalMale />
                        </div>
                        <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
                        <TotalFemale /> 
                        </div>
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
