export const BUTTON_STATUS = {
  isLoading: {
    cursor: 'not-allowed',
  },
  isDisabled: {
    cursor: 'not-allowed',
    backgorundColor: 'red',
  },
}

export const TOOLTIP_TRIANGLE_DIRECTION = {
  topLeft: {
    bottom: '-4.5px',
    left: '6px',
    transform: 'rotate(45deg)',
  },
  top: {
    bottom: '-4.5px',
    left: '50%',
    transform: 'translateX(-50%) rotate(45deg)',
  },
  topRight: {
    bottom: '-4.5px',
    right: '6px',
    transform: 'rotate(45deg)',
  },
  bottomLeft: {
    top: '-4.5px',
    left: '6px',
    transform: 'rotate(45deg)',
  },
  bottom: {
    top: '-4.5px',
    left: '50%',
    transform: 'translateX(-50%) rotate(45deg)',
  },
  bottomRight: {
    top: '-4.5px',
    right: '6px',
    transform: 'rotate(45deg)',
  },
  leftTop: {
    top: '6px',
    right: '-4.5px',
    transform: 'rotate(45deg)',
  },
  left: {
    top: '50%',
    right: '-4.5px',
    transform: 'translateY(-50%) rotate(45deg)',
  },
  leftBottom: {
    bottom: '6px',
    right: '-4.5px',
    transform: 'rotate(45deg)',
  },
  rightTop: {
    top: '6px',
    left: '-4.5px',
    transform: 'rotate(45deg)',
  },
  right: {
    top: '50%',
    left: '-4.5px',
    transform: 'translateY(-50%) rotate(45deg)',
  },
  rightBottom: {
    bottom: '6px',
    left: '-4.5px',
    transform: 'rotate(45deg)',
  },
}

export const TOAST_POSITION = {
  topCenter: {
    top: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  topLeft: {
    top: '20px',
    left: '20px',
  },
  topRight: {
    top: '20px',
    right: '20px',
  },
  bottomCenter: {
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  bottomLeft: {
    bottom: '20px',
    left: '20px',
  },
  bottomRight: {
    bottom: '20px',
    right: '20px',
  },
}
