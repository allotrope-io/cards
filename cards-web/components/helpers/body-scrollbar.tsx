import React from "react";
import { Scrollbars } from 'react-custom-scrollbars';

interface BodyScrollbarState {
    height: number;
    width: number;
}

export interface BodyScrollbarProps {

}

class BodyScrollbar extends React.Component<BodyScrollbarProps, BodyScrollbarState> {
    constructor(props) {
        super(props);
        this.state = {
            height: 0,
            width: 0
        }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    render() {
        return (
            <Scrollbars
                autoHeight
                autoHeightMin={this.state.height}
                universal
                style={{width: this.state.width, zIndex: 31}}
            >
                {this.props.children}
            </Scrollbars>
        );
    }

}

export default BodyScrollbar;