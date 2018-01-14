import React from 'react';
import ReactDOM from 'react-dom';

import {TEDNavbar} from './components/tednavbar.jsx';
import {TEDFooter} from './components/tedfooter.jsx';
import {Section} from './components/section.jsx';

export class About extends React.Component {
	render() {
		return (
            <div>
                <TEDNavbar />
                <Section>
                    About Page
                </Section>
                <TEDFooter />
            </div>
        );
	}
}