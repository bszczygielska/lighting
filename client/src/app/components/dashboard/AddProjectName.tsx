import * as React from 'react';
import { Button, Input, Form } from 'antd';
import { ClientStore } from '../../stores/ClientStore';
import { observer } from 'mobx-react';

const FormItem = Form.Item;

interface IAddLightBulbProps {
  form: any;
  clientStore: ClientStore;
}

@observer
class AddProjectName extends React.Component<IAddLightBulbProps, any> {

  private handleSubmit = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    this.props.form.validateFields((err: any, values: any) => {
      if (err) {
        console.log(err.message)
      }
      else {
        this.props.clientStore.setValue('projectName', values.projectName)
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form layout="inline" onSubmit={ this.handleSubmit }>
          <FormItem label="Space name">
            { getFieldDecorator('projectName', {
              rules: [{ required: true, message: 'Please input space name!' }],
            })(<Input placeholder="ex city of stars"/>) }
          </FormItem>
        <FormItem>
          <Button type="primary"
                  htmlType="submit">Submit</Button>
        </FormItem>
      </Form>

    );
  }
}

export const AddProjectNameForm = Form.create()(AddProjectName);