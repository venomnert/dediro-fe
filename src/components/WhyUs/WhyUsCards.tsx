/* eslint-disable @next/next/no-img-element */
import { Box, Typography } from '@mui/material'
import React from 'react'

const cardsData = [
  {
    title: 'Clarity in a World of Noise',
    iconUrl: 'images/why-choose-us/mag.gif',
    text: 'We sift through mountains of content to bring you only the most relevant and meaningful insights that truly impacts your understanding.'
  },
  {
    title: 'Empowering Future Thinkers',
    iconUrl: 'images/why-choose-us/mask.gif',
    text: 'We give you the insights from world’s brightest minds to think critically and make informed decisions, free from the influence of bias.'
  },
  {
    title: 'Transparent and Unbiased',
    iconUrl: 'images/why-choose-us/lighthouse.gif',
    text: 'We show you where our information comes from. Our insights are free from hidden agendas and bias, giving you a balanced view of every story.'
  },
]

const cardContainer = {
  marginBottom: '60px'
}

const cardTitle = {
  marginLeft: '30px',
  fontWeight: 600,
  width: '230px',
  height: 'fit-content',
  fontSize: '24px'
}

const cardText = {
  fontWeight: 300,
  fontSize: '16px'
}

const imgStyle = {
  width: '90px',
  height: '90px',
  backgroundColor: 'var(--white)',
  borderRadius: '500px'
}

const topContainer = {
  display: 'flex',
  marginBottom: '25px',
  alignItems: 'center'
}

function WhyUsCards() {
  return (
    <Box>
      {cardsData.map(({ title, iconUrl, text }) => (
        <Box sx={cardContainer} key={title} >
          <Box sx={topContainer}>
            <img style={imgStyle} src={iconUrl} alt={title} />
            <Typography sx={cardTitle}>{title}</Typography>
          </Box>
          <Typography sx={cardText}>{text}</Typography>
        </Box>
      ))}
    </Box>
  )
}

export default WhyUsCards