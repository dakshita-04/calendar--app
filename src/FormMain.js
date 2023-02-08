import React from 'react';
import SelectBox from 'devextreme-react/select-box';
import Form from 'devextreme-react/form';
import service from './data.js';


class FormMain extends React.Component {
  constructor() {
    super();
    this.companies = service.getCompanies();
    this.state = {
      labelMode: 'floating',
      labelLocation: 'left',
      readOnly: false,
      showColon: true,
      minColWidth: 300,
      colCount: 2,
      company: this.companies[0],
    };
    this.onCompanyChanged = this.onCompanyChanged.bind(this);
    this.onLabelModeChanged = this.onLabelModeChanged.bind(this);
    this.onLabelLocationChanged = this.onLabelLocationChanged.bind(this);
    this.onReadOnlyChanged = this.onReadOnlyChanged.bind(this);
    this.onShowColonChanged = this.onShowColonChanged.bind(this);
    this.onMinColWidthChanged = this.onMinColWidthChanged.bind(this);
    this.onColumnsCountChanged = this.onColumnsCountChanged.bind(this);
    this.onFormWidthChanged = this.onFormWidthChanged.bind(this);
  }

  render() {
    const {
      labelMode,
      labelLocation,
      readOnly,
      showColon,
      minColWidth,
      colCount,
      company,
      width,
    } = this.state;

    const companySelectorLabelMode = labelMode === 'outside'
      ? 'hidden'
      : labelMode;

    return (
      <div id="form-demo">
        <div className="widget-container">
          { labelMode === 'outside' && (<div>Select company:</div>) }
          <SelectBox
            displayExpr="Name"
            dataSource={this.companies}
            labelMode={companySelectorLabelMode}
            label='Select company'
            value={company}
            onValueChanged={this.onCompanyChanged}
          />
          <Form
            id="form"
            labelMode={labelMode}
            formData={company}
            readOnly={readOnly}
            showColonAfterLabel={showColon}
            labelLocation={labelLocation}
            minColWidth={minColWidth}
            colCount={colCount}
            width={width}
          />
        </div>
        
      </div>
    );
  }

  onCompanyChanged(e) {
    this.setState({
      company: e.value,
    });
  }

  onLabelModeChanged(e) {
    this.setState({
      labelMode: e.value,
    });
  }

  onLabelLocationChanged(e) {
    this.setState({
      labelLocation: e.value,
    });
  }

  onReadOnlyChanged(e) {
    this.setState({
      readOnly: e.value,
    });
  }

  onShowColonChanged(e) {
    this.setState({
      showColon: e.value,
    });
  }

  onMinColWidthChanged(e) {
    this.setState({
      minColWidth: e.value,
    });
  }

  onColumnsCountChanged(e) {
    this.setState({
      colCount: e.value,
    });
  }

  onFormWidthChanged(e) {
    this.setState({
      width: e.value,
    });
  }
}

export default FormMain;
