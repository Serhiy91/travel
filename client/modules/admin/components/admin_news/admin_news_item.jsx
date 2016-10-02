import React, { PropTypes } from 'react';
import Toggle from 'material-ui/Toggle';
import IconButton from 'material-ui/IconButton';
import Delete from 'material-ui/svg-icons/action/delete';
import moment from 'moment';
import { TableRow, TableRowColumn } from 'material-ui/Table';

export default class AdminNewsItem extends React.Component {
  static propTypes = {
    i: PropTypes.number,
    article: PropTypes.object,
    goTo: PropTypes.func,
    togglePublicState: PropTypes.func,
    deleteArticle: PropTypes.func,
  };
  render() {
    const { article, i, togglePublicState, deleteArticle, goTo } = this.props;
    return (
      <TableRow>
        <TableRowColumn className="col-number">{i + 1}</TableRowColumn>

        <TableRowColumn>
          <a href="" onClick={() => goTo('admin.news.edit', { articleId: article._id })}>
            {article.title}
          </a>
        </TableRowColumn>

        <TableRowColumn className="col-date">
          {moment(article.date).format('DD/MM/YYYY')}
        </TableRowColumn>

        <TableRowColumn className="col-date">
          {article.publicDate && moment(article.publicDate).format('DD/MM/YYYY')}
        </TableRowColumn>

        <TableRowColumn className="col-toggle">
          <Toggle
            checked={article.isPublic}
            onToggle={() => togglePublicState(article._id, !article.isPublic)}
          />
        </TableRowColumn>
        <TableRowColumn className="col-btn">
          <IconButton onTouchTap={() => deleteArticle(article._id)}>
            <Delete />
          </IconButton>
        </TableRowColumn>
      </TableRow>
    );
  }
}
