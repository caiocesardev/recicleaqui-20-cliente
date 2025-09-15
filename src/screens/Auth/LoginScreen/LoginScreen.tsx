// Arquivo: src/screens/Auth/LoginScreen/LoginScreen.tsx

import React, { useState } from 'react';
import { StatusBar, Dimensions, View } from 'react-native';
import styled from 'styled-components/native';
import Svg, { Path } from 'react-native-svg';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Importando nossos componentes reutilizáveis
import { Button, TextInput } from '@/components';

// --- DEFINIÇÃO DOS COMPONENTES ESTILIZADOS ---

const ScreenContainer = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    paddingBottom: 30,
  },
})`
  background-color: #f7f7f7;
`;

const HeaderContainer = styled.View`
  height: 300px;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
`;

const HeaderContent = styled.View`
  align-items: center;
  margin-top: -30px;
`;

const LogoImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 80px;
  height: 80px;
  margin-bottom: 5px;
`;

const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: #fff;
`;

const Subtitle = styled.Text`
  font-size: 16px;
  color: #fff;
`;

const FormContainer = styled.View`
  flex: 1;
  align-items: center;
  padding: 0 30px;
  margin-top: -50px;
`;

const TabContainer = styled.View`
  flex-direction: row;
  background-color: #fff;
  border-radius: 50px;
  border: 1px solid #e0e0e0;
  overflow: hidden;
  margin-bottom: 30px;
`;

// --- RECOMENDAÇÃO DE TIPAGEM APLICADA ---
// Definimos uma interface para a prop 'isActive' ser explicitamente um booleano.
interface TabProps {
  isActive: boolean;
}

const TabOption = styled.TouchableOpacity<TabProps>`
  flex: 1;
  padding: 12px 0;
  align-items: center;
  justify-content: center;
  background-color: ${(props: { isActive: any; }) => (props.isActive ? '#348e57' : '#FFFFFF')};
`;

const TabText = styled.Text<TabProps>`
  font-size: 16px;
  font-weight: 600;
  color: ${(props: { isActive: any; }) => (props.isActive ? '#FFFFFF' : '#348e57')};
`;
// --- FIM DA RECOMENDAÇÃO DE TIPAGEM ---

const PasswordInputWrapper = styled.View`
  width: 100%;
  position: relative;
  justify-content: center;
`;

const PasswordVisibilityToggle = styled.TouchableOpacity`
  position: absolute;
  right: 20px;
  height: 55px;
  justify-content: center;
`;

const OrSeparator = styled.Text`
  margin: 20px 0;
  color: #888;
  font-size: 16px;
`;

const SocialLoginContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 10px;
`;

const SocialIcon = styled.TouchableOpacity`
  margin: 0 15px;
`;

// --- COMPONENTE PRINCIPAL DA TELA ---

const LoginScreen = () => {
  const [activeTab, setActiveTab] = useState<'login' | 'cadastro'>('login');
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState('');

  const { width } = Dimensions.get('window');
  
  const handleLogin = () => {
    console.log({ email, password });
    setIsLoading(true);

    setTimeout(() => {
      if (email === '') {
        setEmailError('O campo de e-mail não pode estar vazio.');
      } else {
        setEmailError('');
      }
      setIsLoading(false);
    }, 2000);
  };

  return (
    <ScreenContainer>
      <StatusBar barStyle="light-content" backgroundColor="#348e57" />

      <HeaderContainer>
        <Svg
          height="100%"
          width={width}
          viewBox={`0 0 ${width} 300`}
          style={{ position: 'absolute' }}>
          <Path
            fill="#348e57"
            d={`M0,0 L0,220 Q${width / 2},280 ${width},220 L${width},0 Z`}
          />
        </Svg>
        <HeaderContent>
          <LogoImage source={require('@/assets/images/logo-recicle-aqui.png')} />
          <Title>Recicle Aqui</Title>
          <Subtitle>Descarte de lixo eletrônicos</Subtitle>
        </HeaderContent>
      </HeaderContainer>

      <FormContainer>
        <TabContainer>
          <TabOption
            isActive={activeTab === 'login'}
            onPress={() => setActiveTab('login')}>
            <TabText isActive={activeTab === 'login'}>Log In</TabText>
          </TabOption>
          <TabOption
            isActive={activeTab === 'cadastro'}
            onPress={() => setActiveTab('cadastro')}>
            <TabText isActive={activeTab === 'cadastro'}>Cadastro</TabText>
          </TabOption>
        </TabContainer>

        <TextInput
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
          error={emailError}
        />

        <PasswordInputWrapper>
          <TextInput
            placeholder="Senha"
            secureTextEntry={!isPasswordVisible}
            value={password}
            onChangeText={setPassword}
          />
          <PasswordVisibilityToggle
            onPress={() => setPasswordVisible(prev => !prev)}>
            <Icon
              name={isPasswordVisible ? 'eye-off' : 'eye'}
              size={24}
              color="#888"
            />
          </PasswordVisibilityToggle>
        </PasswordInputWrapper>

        <View style={{ height: 15 }} />

        <Button 
          title="Log In" 
          onPress={handleLogin}
          isLoading={isLoading} 
        />

        <OrSeparator>Ou</OrSeparator>

        <SocialLoginContainer>
          <SocialIcon>
            <Icon name="facebook" size={30} color="#3b5998" />
          </SocialIcon>
          <SocialIcon>
            <Icon name="instagram" size={30} color="#e1306c" />
          </SocialIcon>
          <SocialIcon>
            <Icon name="google" size={30} color="#db4437" />
          </SocialIcon>
        </SocialLoginContainer>
      </FormContainer>
    </ScreenContainer>
  );
};

export default LoginScreen;