import { Container, FormContent, Button, FormFooter, Input, RadioGorup, RadioButton, Title } from './styles/Components';
import { сonjugateNoun } from './helpers/ConjugateNoun';
import {
  Formik,
  Form,
  Field,
} from 'formik';
import { useState } from 'react';

interface MyFormValues {
  text: string;
  picked: string;
}

export const App: React.FC<{}> = () => {
  const initialValues: MyFormValues = { text: '', picked: '1' };
  const [{ error, text }, setState] = useState({ error: false, text: "" });

  const cyrillicPattern = /^[\u0400-\u04FF]+$/;


  return (
    <Container>
      <FormContent>
        <Title>СПРЯЖЕНИЕ РУССКИХ СУЩЕСТВИТЕЛЬНЫХ</Title>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            if (values.text.length>0) {
              cyrillicPattern.test(values.text) ? setState({error:false,text:сonjugateNoun(values)}) : setState({error:true,text:"НАПИШИТЕ КИРИЛЛИЧНЫМ АЛФАВИТОМ"})
              
            } else {
            setState({error:true,text:"НАПИШИТЕ СУЩЕСТВИТЕЛЬНОЕ"})
            
            }

            console.log({ values, actions });
            actions.setSubmitting(false);
          }}
        >
          <Form>
            <Input id="text" name="text" placeholder="Напишите существительное" />
            <div id="my-radio-group">ВЫБЕРИТЕ ПАДЕЖ</div>
            <RadioGorup role="group" aria-labelledby="my-radio-group">
              <RadioButton>
                <Field type="radio" name="picked" value="1" />
                1- Именительный
              </RadioButton>
              <label>
                <Field type="radio" name="picked" value="2" />
                2- Родительный 
              </label>
              <label>
                <Field type="radio" name="picked" value="3" />
                3- Дательный 
              </label>
              <label>
                <Field type="radio" name="picked" value="4" />
                4- Винительный 
              </label>
              <label>
                <Field type="radio" name="picked" value="5" />
                5- Творительный 
              </label>
              <label>
                <Field type="radio" name="picked" value="6" />
                6- Предложный 
              </label>

            </RadioGorup>
            <Button type="submit">СПРЯЖЕНИЕ</Button>
          </Form>
        </Formik>
        <FormFooter backgroundColor={error ? "#f44336" : "#333131"}>
          
          {text}
        </FormFooter>
      </FormContent>

    </Container>
  );
};