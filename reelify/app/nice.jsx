import PropTypes from 'prop-types'

const Nice = props => {
  return (
    <div className='text-white'>{props.titleText}</div>
  )
}
Nice.propTypes = {
    titleText: PropTypes.string.isRequired,
    isVisible: PropTypes.bool
}
export default Nice