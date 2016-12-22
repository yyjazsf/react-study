/**
 * Created by yyj on 20/12/2016.
 */
import React, { PropTypes } from 'react';

const SharePage = ({
  name,
  description,
  imagePath,
  onChangeNameInput,
  onChangeDescriptionInput,
  onChangeImageUrl,
  onRecipeSubmit,
}) => (
  <div>
    <h3>食谱</h3>
    <form onSubmit={onRecipeSubmit}>
      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input
          className="mdl-textfield__input"
          type="text" id="recipeName"
          defaultValue={name}
          onChange={onChangeNameInput}
        />
        <label className="mdl-textfield__label" htmlFor="recipeName">名称</label>
      </div>
      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input
          className="mdl-textfield__input"
          type="text" id="description"
          defaultValue={description}
          onChange={onChangeDescriptionInput}
        />
        <label className="mdl-textfield__label" htmlFor="description">说明</label>
      </div>
      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input
          className="mdl-textfield__input"
          type="text" id="img"
          defaultValue={imagePath}
          onChange={onChangeImageUrl}
        />
        <label className="mdl-textfield__label" htmlFor="img">图片</label>
      </div>
      <div>
        <button
          type="submit"
          className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent"
        >
          submit
        </button>
      </div>
    </form>
  </div>
);
SharePage.propTypes = {
  name: PropTypes.string,
  imagePath: PropTypes.string,
  description: PropTypes.string,
  onChangeNameInput: PropTypes.func.isRequired,
  onChangeDescriptionInput: PropTypes.func.isRequired,
  onChangeImageUrl: PropTypes.func.isRequired,
  onRecipeSubmit: PropTypes.func.isRequired,
};
export default SharePage;
