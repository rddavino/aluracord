import {Box, Button, Text, TextField, Image} from '@skynexui/components'
import appConfig from '../config.json'
import React from 'react';
import {useRouter} from 'next/router'


function Titulo(props) {

    //console.log(props.children);
    const Tag = props.tag || 'h1';

    return (   
        <>
            <Tag>{props.children}</Tag>

            <style jsx>{`
                ${Tag}{
                    color: ${appConfig.theme.colors.neutrals['100']};
                    font-size: 24px;
                    font-weight: 600;
                }
            `}</style>
        </> 
    )
}

// function HomePage() {
//     return (
//         <div>
//             <GlobalStyle />
//             <Titulo tag="h2">Bem vindo de volta!</Titulo>
//             <h2>Discord - Alura Matrix</h2>    
//         </div>
//     )
//   }
  
//   export default HomePage

function PaginaInicial() {
    //const username = 'rddavino';

    const [username, setUsername] = React.useState();
    console.log("useState" , React.useState())
    const roteamento = useRouter();
  
    return (
      <>
        {/* <GlobalStyle /> */}

        <Box styleSheet={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: appConfig.theme.colors.neutrals[900],
            backgroundImage: 'url(https://virtualbackgrounds.site/wp-content/uploads/2020/11/ama-dablam-mountain.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            // backgroundBlendMode: 'multiply',
          }}
        >

          <Box styleSheet={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'column',
              width: '100%',
              maxWidth: '500px',
              borderRadius: '5px',
              padding: '32px',
              margin: '16px',
              boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
              backgroundColor: appConfig.theme.colors.neutrals[600],
              opacity: 0.9,
              backgroundBlendMode: 'multiply'
            }}
          >

           
            <Box styleSheet={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: '160px',
                minWidth: '160px',
                // padding: '16px',
                backgroundColor: appConfig.theme.colors.neutrals[800],
                border: '1px solid',
                borderColor: appConfig.theme.colors.neutrals[999],
                borderRadius: '50%',
                flex: 1,
                maxHeight: '160px',
                minHeight: '160px',
                backgroundImage: 'url(https://www.fiscalti.com.br/wp-content/uploads/2021/02/default-user-image.png)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                // backgroundBlendMode: 'multiply',
              }}
              
            >
              <Image styleSheet={{
                  borderRadius: '50%',
                  marginBottom: '16px',
                }}
                src={`https://github.com/${username}.png`}
              />
              
            </Box>
            
            <Box>
             {/* <Text
                variant="body4"
                styleSheet={{
                  color: appConfig.theme.colors.neutrals[200],
                  // backgroundColor: appConfig.theme.colors.neutrals[900],
                  // padding: '3px 10px',
                  // borderRadius: '1000px'
                }}
              >
                {username}
              </Text> */}
            </Box>

            {/* Formulário */}
            <Box
              as="form"
              onSubmit={function(event){
                event.preventDefault();
                //window.location.href = '/chat'
                roteamento.push('/chat');
              }}
              styleSheet={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                width: { xs: '100%', sm: '50%', lg: '90%' }, textAlign: 'center', marginBottom: '32px',
                marginTop: '24px'

              }}
            >
              <Titulo tag="h2">Boas vindas de volta!</Titulo>
              <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>
                {appConfig.name} {username}
              </Text>
            
              <TextField 

                // value={username}
                onChange={function(event){
                  const valor = event.target.value;
                  if(valor.length > 2) {
                    setUsername(valor);
                  }

                }}            
                fullWidth
                textFieldColors={{
                  neutral: {
                    textColor: appConfig.theme.colors.neutrals[200],
                    mainColor: appConfig.theme.colors.neutrals[900],
                    mainColorHighlight: appConfig.theme.colors.primary[500],
                    backgroundColor: appConfig.theme.colors.neutrals[800],
                  },
                }}
              />
              <Button
                type='submit'
                label='Entrar'
                fullWidth
                buttonColors={{
                  contrastColor: appConfig.theme.colors.neutrals["000"],
                  mainColor: appConfig.theme.colors.primary[500],
                  mainColorLight: appConfig.theme.colors.primary[400],
                  mainColorStrong: appConfig.theme.colors.primary[600],
                }}
                styleSheet={{
                 opacity: 1
  
                }}
              />
            </Box>
            {/* Formulário */}
  
  
          </Box>
        </Box>
      </>
    );
  }

export default PaginaInicial;