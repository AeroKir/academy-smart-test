/**
 * Test task for Academy SMART implemented by Kirill Shevtsov
 * e-mail: shev.kv.1982@gmail.com
 * GitHub: https://github.com/AeroKir
 * LinkedIn: https://www.linkedin.com/in/kirill-shevtsov-0a4374138
 */

const actionTypes = ['CALCULATE_QUOTE', 'FETCH_QUOTES', 'UPDATE_ADVANCED_QUOTE_SEARCH', 'FETCH_QUOTE_PRODUCTS'];

/**
 * Creates an action types
 * @param {Array of strings} baseActionTypes
 * @returns {Object}
 */
function createActionTypes(baseActionTypes) {
  const subActions = baseActionTypes.map(baseAction => ({
    CLEAR_NOTIFICATION: `${baseAction}_CLEAR_NOTIFICATION`,
    FAILED: `${baseAction}_FAILED`,
    REQUEST: `${baseAction}_REQUEST`,
    SUCCESS: `${baseAction}_SUCCESS`,
  }));

  const actionTypesObject = Object.assign(...baseActionTypes.map(
    (actionType, index) => ({ [actionType]: subActions[index] }),
  ));

  return actionTypesObject;
}

createActionTypes(actionTypes);
console.dir(createActionTypes(actionTypes));

/**
 * Creates actions
 * @param {Array of strings} actions
 * @returns {Object}
 */
function createActions(actions) {
  const receivedActionTypes = createActionTypes(actions);
  const actionValues = Object.entries(receivedActionTypes);

  const actionsList = actionValues.map(actionValue => ({
    CLEAR_NOTIFICATION(actionPayload) {
      return () => ({
        type: actionValue[1].CLEAR_NOTIFICATION,
        payload: actionPayload,
      });
    },
    FAILED(actionPayload) {
      return () => ({
        type: actionValue[1].FAILED,
        payload: actionPayload,
      });
    },
    REQUEST(actionPayload) {
      return () => ({
        type: actionValue[1].REQUEST,
        payload: actionPayload,
      });
    },
    SUCCESS(actionPayload) {
      return () => ({
        type: actionValue[1].SUCCESS,
        payload: actionPayload,
      });
    },
  }));

  const actionsObject = Object.assign(
    ...actions.map((actionType, index) => ({ [actionType]: actionsList[index] })),
  );

  return actionsObject;
}

createActions(actionTypes);
console.dir(createActions(actionTypes));
