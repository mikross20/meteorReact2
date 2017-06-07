import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Biens extends Component {
    render(){
        const test = {backgroundImage: "url('https://www.reo-partners.be/img/a-vendre.jpg')"};
        const test2 = {backgroundImage: "url('https://www.reo-partners.be/img/a-louer.jpg')"};
        return(
            <ReactCSSTransitionGroup
                        component="div"
                        className="services"
                        transitionName="route"
                        transitionEnterTimeout={300}
                        transitionAppearTimeout={600}
                        transitionLeaveTimeout={200}
                        transitionAppear={true}
            >
                <div className="services">
                    <div className="choiceImages">
                        <a className="choiceImages_choice" href="/biens?type=Vente">
                            <div className="choiceImages_img" style={test}>
                                <span className="choiceImages_text">Biens à vendre</span>
                            </div>
                        </a>
                        <a className="choiceImages_choice" href="/biens?type=Location">
                            <div className="choiceImages_img" style={test2}>
                                <span className="choiceImages_text">Biens à louer</span>
                            </div>
                        </a>
                    </div>
                </div>
            </ReactCSSTransitionGroup>
        )
    }
}