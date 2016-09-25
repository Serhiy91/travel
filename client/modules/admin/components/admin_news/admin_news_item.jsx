import React, { PropTypes } from 'react';
import Toggle from 'material-ui/Toggle';
import moment from 'moment';
import { TableRow, TableRowColumn } from 'material-ui/Table';

class AdminNewsItem extends React.Component {
  render() {
    const { article, i, togglePublicState, goTo } = this.props;
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
      </TableRow>
    );
  }
}

AdminNewsItem.propTypes = {
  i: PropTypes.number,
  article: PropTypes.object,
  goTo: PropTypes.func,
  togglePublicState: PropTypes.func,
};

export default AdminNewsItem;
