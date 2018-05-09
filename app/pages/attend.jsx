import React from 'react';
import ReactDOM from 'react-dom';

import {TEDNavbar} from '../components/tednavbar.jsx';
import {TEDFooter} from '../components/tedfooter.jsx';
import {Section} from '../components/section.jsx';

export class Attend extends React.Component {
    componentDidMount() {
        document.title = "Attend - TEDxUofW";
        window.scrollTo(0, 0)
    }
    
	render() {            
		return (
            <div>
                <TEDNavbar index='4' />
                <Section title='Attend'>
                </Section>
                <TEDFooter />
            </div>
        );
	}
}