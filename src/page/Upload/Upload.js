import { Map, List } from 'immutable';
import React, { PureComponent } from 'react';
import classNames from 'classnames/bind';
import styles from './Upload.scss';
import { StepperTemplate, DropzoneTemplate, RaisedButtonTemplate, UploadContentWrapper, TermsTemplate } from '../../components';
import { UploadButton } from '../../containers';

const cx = classNames.bind(styles);

class Upload extends PureComponent {
    state = {
        steps: [{
            title: '규정',
        }, {
            title: '업로드',
        }, {
            title: '추후 안내',
        }, {
            title: '완료',
        }],
        currentStep: 0,
        fd: Map({
            work: List(),
            title: '사법권은 법관으로 구성된 법원에 속한다. 각급 선거관리위원회의 조직·직무범위 기타 필요한 사항은 법률로 정한다.',
            content: '근로자는 근로조건의 향상을 위하여 자주적인 단결권·단체교섭권 및 단체행동권을 가진다. 환경권의 내용과 행사에 관하여는 법률로 정한다. 국가유공자·상이군경 및 전몰군경의 유가족은 법률이 정하는 바에 의하여 우선적으로 근로의 기회를 부여받는다.'
        })
    };

    render() {
        const { steps, currentStep, fd } = this.state;
        return (
            <div className={ cx('upload-page') }>
                <StepperTemplate
                    steps={ steps }
                    crntStep={ currentStep }
                />
                <UploadContentWrapper>
                {
                  this._renderUploadStep()
                }
                </UploadContentWrapper>
                <div style={styl.center}>
                  <RaisedButtonTemplate label="이전" style={ styl.prevnext } onClick={this._prevPageSet}/>
                  <RaisedButtonTemplate label="다음" style={ styl.prevnext } onClick={this._nextPageSet}/>
                </div>
            </div>
        );
    }

    _renderUploadStep = () => {
      const { fd, currentStep } = this.state;

      switch(currentStep) {
        case 0:
          return (
            <div>
              <TermsTemplate title="규정" content={ fd.get('title') } />
              <TermsTemplate title="규정" content={ fd.get('content') } />
            </div>
          );
        case 1:
          return (
              <div>
                <section>
                  <DropzoneTemplate
                      setFiles={ this._setFiles }
                      fnm={ fd.get('work').get(0) ? fd.get('work').get(0).name : '' }
                      fsz={ fd.get('work').get(0) ? fd.get('work').get(0).size : 0 }
                  />
                </section>
                <UploadButton
                  fd={ fd }
                  style={ styl.upload }
                  label="업로드하기"
                  onClick={ this._handleUploadBtnClick }
                />
              </div>
            );
          case 2:
            return (
              <div style={styl.center}>
                작업실에서 심사 진행 사항을 확인할 수 있습니다<br/>
                심사가 완료될 때까지 기다려주세요.<br/>
                심사가 완료되면 다른 사람에게 보여지게 됩니다.
              </div>
            )
          default:
            return <div></div>;
        }
    }


    _prevPageSet = () => {
      if (this.state.currentStep == 0) {
        return;
      }

      this.setState({currentStep : this.state.currentStep - 1})
    }

    _nextPageSet = () => {
      if (this.state.currentStep == 3) {
        return;
      }

      this.setState({currentStep : this.state.currentStep + 1})
    }

    _setFiles = (work) => this.setState({ fd: this.state.fd.set('work', List(work)) });

    _handleUploadBtnClick = () => {}
}

const styl = {
    upload: {
        width: '100%',
        backgroundColor: '#868e96',
        color: 'white',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '0.8rem'
    },

    prevnext: {
        backgroundColor: '#868e96',
        color: 'white',
        margin: '3rem',
        fontSize: '0.8rem'
    },

    center: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
}

export default Upload;
