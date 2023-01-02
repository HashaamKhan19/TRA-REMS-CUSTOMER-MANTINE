import {
  createStyles,
  Overlay,
  Container,
  Title,
  Input,
  MultiSelect,
  Button,
  Box,
  Text,
} from '@mantine/core'
import { IconChevronDown, IconLocation } from '@tabler/icons'

const useStyles = createStyles((theme) => ({
  hero: {
    position: 'relative',
    backgroundImage:
      'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  container: {
    height: 250,
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: theme.spacing.xl * 6,
    zIndex: 1,
    position: 'relative',
    // backgroundColor: 'red',

    [theme.fn.smallerThan('sm')]: {
      height: 250,
      paddingBottom: theme.spacing.xl * 3,
    },
  },

  title: {
    color: theme.white,
    fontSize: 60,
    fontWeight: 600,
    letterSpacing: 2,
    fontFamily: 'poppins',
    lineHeight: 1.1,
    textAlign: 'center',
    marginTop: theme.spacing.xl * 1.5,

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
      lineHeight: 1.3,
      fontFamily: 'poppins',
    },
  },

  description: {
    color: theme.white,
    marginTop: theme.spacing.md,
    textAlign: 'center',
    fontSize: 18,

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  control: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    marginTop: 50,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
      gap: 10,
      marginTop: 20,
      width: '80%',
    },
  },
}))

export default function SearchSection() {
  const cityData = [
    { value: 'islamabad', label: 'Islamabad' },
    { value: 'rawalpindi', label: 'Rawalpindi' },
    { value: 'lahore', label: 'Lahore' },
    { value: 'karachi', label: 'Karachi' },
    { value: 'peshawar', label: 'Peshawar' },
    { value: 'quetta', label: 'Quetta' },
  ]
  const typeData = [
    { value: 'house', label: 'House' },
    { value: 'plot', label: 'Plot' },
    { value: 'flat', label: 'Flat' },
    { value: 'shop', label: 'Shop' },
    { value: 'file', label: 'File' },
    { value: 'farmhouse', label: 'Farmhouse' },
    { value: 'building', label: 'Building' },
  ]
  const priceData = [
    { value: '15', label: '<15 Lac' },
    { value: '30', label: '<30 Lac' },
    { value: '50', label: '<50 Lac' },
    { value: '75', label: '<75 Lac' },
    { value: '1', label: '<1 Crore' },
    { value: '1', label: '>1 Crore' },
  ]

  const { classes } = useStyles()

  return (
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
        blur={3}
      />
      <Container className={classes.container}>
        <Title className={classes.title}>Find Your Dream Home</Title>
        <Text className={classes.description}>
          This is where you can find a dream home of your choice without stress
        </Text>
        <Container className={classes.control}>
          <MultiSelect
            data={cityData}
            label="Choose City"
            placeholder="Islamabad"
            searchable
            nothingFound="No city found!"
            size="md"
            styles={{
              label: {
                color: 'white',
                fontSize: 16,
              },
            }}
          />
          <MultiSelect
            data={typeData}
            label="Choose Type"
            placeholder="House"
            searchable
            nothingFound="No type found!"
            size="md"
            styles={{
              label: {
                color: 'white',
                fontSize: 16,
              },
            }}
          />
          <MultiSelect
            data={priceData}
            label="Choose Price Range"
            placeholder="<15 Lac"
            size="md"
            styles={{
              label: {
                color: 'white',
                fontSize: 16,
              },
            }}
          />
          <Box
            style={{
              display: 'flex',
              alignItems: 'flex-end',
            }}
          >
            <Button
              variant="filled"
              fullWidth
              size="md"
              style={{
                backgroundColor: '#D92228',
                color: 'white',
              }}
            >
              Search
            </Button>
          </Box>
        </Container>
      </Container>
    </div>
  )
}