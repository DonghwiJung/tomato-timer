import {connect} from 'react-redux';
import Timer from './presenter';

function mapStateToProps(state) {
    const {isPlaying, timeDuration, elapsedTime} = state;
    return {
        isPlaying,
        timeDuration,
        elapsedTime
    }
}

export default connect(mapStateToProps)(Timer);