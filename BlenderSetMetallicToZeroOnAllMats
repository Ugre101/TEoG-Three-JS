import bpy
for mat in bpy.data.materials:
    if not mat.use_nodes:
        mat.metallic = 0
        continue
    for n in mat.node_tree.nodes:
        if n.type == 'BSDF_PRINCIPLED':
            n.inputs["Metallic"].default_value = 0