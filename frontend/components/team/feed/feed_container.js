import { connect } from 'react-redux'
import Feed from './feed'
import { loadMessages } from '../../../actions/channel_actions'

function mapStateToProps(state) {
  return {
    messages: state.channel.messages
  }
}

export default connect(mapStateToProps, { loadMessages })(Feed)
