import React from 'react'

export default class Home extends React.Component {
    render() {
        return (
            <div className="right_col" role="main">
                <div className="row tile_count">
                    <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
                        <span className="count_top"><i className="fa fa-user"></i> Total Users</span>
                        <div className="count">2500</div>
                        <span className="count_bottom"><i className="green">4% </i> From last Week</span>
                    </div>
                    <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
                        <span className="count_top"><i className="fa fa-clock-o"></i> Average Time</span>
                        <div className="count">123.50</div>
                        <span className="count_bottom"><i className="green"><i className="fa fa-sort-asc"></i>3% </i> From last Week</span>
                    </div>
                    <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
                        <span className="count_top"><i className="fa fa-user"></i> Total Males</span>
                        <div className="count green">2,500</div>
                        <span className="count_bottom"><i className="green"><i className="fa fa-sort-asc"></i>34% </i> From last Week</span>
                    </div>
                    <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
                        <span className="count_top"><i className="fa fa-user"></i> Total Females</span>
                        <div className="count">4,567</div>
                        <span className="count_bottom"><i className="red"><i className="fa fa-sort-desc"></i>12% </i> From last Week</span>
                    </div>
                    <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
                        <span className="count_top"><i className="fa fa-user"></i> Total Collections</span>
                        <div className="count">2,315</div>
                        <span className="count_bottom"><i className="green"><i className="fa fa-sort-asc"></i>34% </i> From last Week</span>
                    </div>
                    <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
                        <span className="count_top"><i className="fa fa-user"></i> Total Connections</span>
                        <div className="count">7,325</div>
                        <span className="count_bottom"><i className="green"><i className="fa fa-sort-asc"></i>34% </i> From last Week</span>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="dashboard_graph">

                            <div className="row x_title">
                                <div className="col-md-6">
                                    <h3>Network Activities <small>Graph title sub-title</small></h3>
                                </div>
                                <div className="col-md-6">
                                    <div id="reportrange" className="pull-right" style={{ background: '#fff', cursor: 'pointer', padding: '5px 10px', border: '1px solid #ccc' }}>
                                        <i className="glyphicon glyphicon-calendar fa fa-calendar"></i>
                                        <span>December 30, 2014 - January 28, 2015</span> <b className="caret"></b>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-9 col-sm-9 col-xs-12">
                                <div id="chart_plot_01" className="demo-placeholder"></div>
                            </div>
                            <div className="col-md-3 col-sm-3 col-xs-12 bg-white">
                                <div className="x_title">
                                    <h2>Top Campaign Performance</h2>
                                    <div className="clearfix"></div>
                                </div>

                                <div className="col-md-12 col-sm-12 col-xs-6">
                                    <div>
                                        <p>Facebook Campaign</p>
                                        <div className="">
                                            <div className="progress progress_sm" style={{ width: '76%' }}>
                                                <div className="progress-bar bg-green" role="progressbar" data-transitiongoal="80"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <p>Twitter Campaign</p>
                                        <div className="">
                                            <div className="progress progress_sm" style={{ width: '76%' }}>
                                                <div className="progress-bar bg-green" role="progressbar" data-transitiongoal="60"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-sm-12 col-xs-6">
                                    <div>
                                        <p>Conventional Media</p>
                                        <div className="">
                                            <div className="progress progress_sm" style={{ width: '76%' }}>
                                                <div className="progress-bar bg-green" role="progressbar" data-transitiongoal="40"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <p>Bill boards</p>
                                        <div className="">
                                            <div className="progress progress_sm" style={{ width: '76%' }}>
                                                <div className="progress-bar bg-green" role="progressbar" data-transitiongoal="50"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="clearfix"></div>
                        </div>
                    </div>

                </div>
                <br />

                <div className="row">


                    <div className="col-md-4 col-sm-4 col-xs-12">
                        <div className="x_panel tile fixed_height_320">
                            <div className="x_title">
                                <h2>App Versions</h2>
                                <ul className="nav navbar-right panel_toolbox">
                                    <li><a className="collapse-link"><i className="fa fa-chevron-up"></i></a>
                                    </li>
                                    <li className="dropdown">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench"></i></a>
                                        <ul className="dropdown-menu" role="menu">
                                            <li><a href="#">Settings 1</a>
                                            </li>
                                            <li><a href="#">Settings 2</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a className="close-link"><i className="fa fa-close"></i></a>
                                    </li>
                                </ul>
                                <div className="clearfix"></div>
                            </div>
                            <div className="x_content">
                                <h4>App Usage across versions</h4>
                                <div className="widget_summary">
                                    <div className="w_left w_25">
                                        <span>0.1.5.2</span>
                                    </div>
                                    <div className="w_center w_55">
                                        <div className="progress">
                                            <div className="progress-bar bg-green" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: '66%'}}>
                                                <span className="sr-only">60% Complete</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w_right w_20">
                                        <span>123k</span>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>

                                <div className="widget_summary">
                                    <div className="w_left w_25">
                                        <span>0.1.5.3</span>
                                    </div>
                                    <div className="w_center w_55">
                                        <div className="progress">
                                            <div className="progress-bar bg-green" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: '45 %'}}>
                                                <span className="sr-only">60% Complete</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w_right w_20">
                                        <span>53k</span>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="widget_summary">
                                    <div className="w_left w_25">
                                        <span>0.1.5.4</span>
                                    </div>
                                    <div className="w_center w_55">
                                        <div className="progress">
                                        <div className="progress-bar bg-green" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: '25%' }}>
                                                <span className="sr-only">60% Complete</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w_right w_20">
                                        <span>23k</span>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="widget_summary">
                                    <div className="w_left w_25">
                                        <span>0.1.5.5</span>
                                    </div>
                                    <div className="w_center w_55">
                                        <div className="progress">
                                    <div className="progress-bar bg-green" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: '5%'}}>
                                                <span className="sr-only">60% Complete</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w_right w_20">
                                        <span>3k</span>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="widget_summary">
                                    <div className="w_left w_25">
                                        <span>0.1.5.6</span>
                                    </div>
                                    <div className="w_center w_55">
                                        <div className="progress">
                                            <div className="progress-bar bg-green" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: '2%' }}>
                                                <span className="sr-only">60% Complete</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w_right w_20">
                                        <span>1k</span>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}