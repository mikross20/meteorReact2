import React from 'react';
import { mount } from 'react-mounter';

import { MainLayout } from './layout/MainLayout.jsx';
import { SecondLayout } from './layout/SecondLayout.jsx';
import ResolutionsWrapper from './resolutions/ResolutionsWrapper.jsx';
import ResolutionDetail from './resolutions/ResolutionDetail.jsx';
import About from './About.jsx';
import Biens from './reo/biens.jsx';
import Proprietaire from './reo/proprietaire.jsx';
import Services from './reo/services.jsx';
import notFound from './notFound.jsx';
import { propri } from './reo/ladder.jsx';
import { acheteurLocataire } from './reo/ladder.jsx';

FlowRouter.route('/', {
    action(){
        mount(MainLayout, {
            content: (<ResolutionsWrapper />)
        })
    }
});

FlowRouter.route('/about', {
    action(){
        mount(MainLayout, {
            content: (<About/>)
        })
    }
});

FlowRouter.route('/biens', {
    action(){
        mount(MainLayout, {
            content: (<Biens/>)
        })
    }
});

FlowRouter.route('/services', {
    action(){
        mount(MainLayout, {
            content: (<Services/>)
        })
    }
});

FlowRouter.route('/services/proprietaire', {
    action(){
        mount(MainLayout, {
            content: (<Proprietaire ladder={propri}/>)
        })
    }
});

FlowRouter.route('/services/acheteur-locataire', {
    action(){
        mount(MainLayout, {
            content: (<Proprietaire ladder={acheteurLocataire}/>)
        })
    }
});

FlowRouter.route('/resolutions/:id', {
    action(params){
        mount(MainLayout, {
            content: (<ResolutionDetail id={params.id}/>)
        })
    }
});

FlowRouter.notFound = {
    subscriptions: function() {
        mount(MainLayout, {
            content: (<notFound />)
        })
    },
    action: function() {
        mount(MainLayout, {
            content: (<notFound />)
        })
    }
};
