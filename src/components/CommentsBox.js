import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/CommentBox';

describe('CommentBox', () => {

  it('has a text area', () => {

    const component = renderComponent(App);
    
    expect(component).to.contain('React simple starter');
    
  });

  it('has a button', () => {
    
        const component = renderComponent(App);
        
        expect(component).to.contain('React simple starter');
        
      });
  
});

