import './LayoutStyles.scss';
import './MostlyFluid.scss';
import {Component} from "react";

class MostlyFluid extends Component {
    render() {
        return (
            <div className="MostlyFluid">
                {this.props.layoutStructure}
            </div>
        );
    }
}

export default MostlyFluid;