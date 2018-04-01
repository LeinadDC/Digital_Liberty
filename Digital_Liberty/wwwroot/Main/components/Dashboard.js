import React from 'react';
import CivilChart from './Charts/CivilChart';
import AgeChart from './Charts/AgeChart';
import ChildrenChart from './Charts/ChildrenChart';
import NationalityChart from './Charts/NationalityChart';
import ReligionChart from './Charts/ReligionChart';
import ProvinceChart from './Charts/ProvinceChart';
import ProblemChart from './Charts/ProblemChart';
import WorkChart from './Charts/WorkChart';
import ScholarshipChart from './Charts/ScholarshipChart';

export default class Dashboardx extends React.Component {
    render() {
        return (
            <div className="right_col" role="main">
                <div className="row tile_count">
                    <div className="col-md-2 col-sm-4 col-xs-12 tile_stats_count">
                        <span className="count_top"><i className="fa fa-user"></i> Total Beneficiados</span>
                        <div className="count">2500</div>
                    </div>
                    <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
                        <span className="count_top"><i className="fa fa-clock-o"></i>Activos</span>
                        <div className="count green">123.50</div>
                    </div>
                    <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
                        <span className="count_top"><i className="fa fa-user"></i>Inactivos</span>
                        <div className="count red">2,500</div>
                    </div>
                    <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
                        <span className="count_top"><i className="fa fa-user"></i>Hombres</span>
                        <div className="count">4,567</div>
                    </div>
                    <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
                        <span className="count_top"><i className="fa fa-user"></i>Mujeres</span>
                        <div className="count">2,315</div>
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
                            <ReligionChart />
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
