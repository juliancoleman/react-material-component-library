import * as React from "react";
import * as cn from "classnames";

/**
 * @name mdc-button
 */

export interface MDCButtonProps {
  children?: string | React.ReactElement<any> | React.ReactNode;
  onClick?: ((event: React.SyntheticEvent<HTMLButtonElement>) => void) | undefined;
}

export default class extends React.PureComponent<MDCButtonProps> {
  render(): React.ReactElement<HTMLButtonElement> {
    return (
      <button className={cn("mdc-button")} onClick={this.props.onClick}>
        { this.props.children }
      </button>
    );
  }
}
