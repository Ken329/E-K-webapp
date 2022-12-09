import React from 'react'
import PropTypes from 'prop-types'

const Container = ({ children }) => {
    return (
        <div class="container mx-auto">
            {children}
        </div>
    )
}

Container.defaultProps = {
    children: PropTypes.string,
}

export default Container;
