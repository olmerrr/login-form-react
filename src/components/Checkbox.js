import React from 'react'

function Checkbox({ label, linkText, linkHref, optional }) {
  const [beforeLink, afterLink] = label.split(linkText)

  return (
    <label className="checkbox">
      <input type="checkbox" />
      <span className="custom-checkbox"></span>
      <span className="label-text">
        {beforeLink}
        <a href={linkHref} className="link" target="_blank" rel="noopener noreferrer">
          {linkText}
        </a>
        {afterLink}
        {optional && <span className="optional">(Optional)</span>}
      </span>
    </label>
  )
}

export default Checkbox
