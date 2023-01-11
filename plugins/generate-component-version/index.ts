// // First, use the `figma.currentPage.findAll()` method to find the layer that you want to duplicate.
// const originalLayer = figma.currentPage.findAll(node => node.type === "COMPONENT")[0];

// // Use the `layer.clone()` method to create a copy of the layer.
// const clonedLayer = originalLayer.clone();

// // Use the `figma.currentPage.appendChild()` method to add the cloned layer to the current page.
// figma.currentPage.appendChild(clonedLayer);

// // Create a UI to show all available version of each component
// figma.showUI(__html__, {width: 300, height: 300});

// // Use a `for` loop to iterate through all of the components inside the original layer.
// for (const component of originalLayer.children) {
//   // Use the `component.getAllInstances()` method to get all of the instances of the current component.
//   const instances = component.getAllInstances();
//   // Use the `instance.replaceWith()` method to replace the current instance with a new version of the component, selected by the user.
//   instances.forEach(async (instance) => {
//     figma.ui.onmessage = async (msg) => {
//       if(msg.type === 'change-version') {
//         await instance.replaceWith(figma.getNodeById(msg.versionId));
//         figma.closePlugin();
//       }
//     }
//   });
// }
