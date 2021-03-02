import define1 from "./e93997d5089d7165@2303.js";
import define2 from "./10023e7d8ddc32bc@90.js";
import define3 from "./6b56a2a00cbb4676@610.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  const fileAttachments = new Map([["Molecule-7.json",new URL("./files/7ac439434378091764695a8628b28b0231fbb2f8c7af9b37d710c2d2648b7e09e393efd4e02a36bea5d885e919c6cae07eadc327935bbd019e673acdf60d07a1",import.meta.url)]]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], function(md){return(
md`# Raytracer`
)});
  main.variable(observer("viewof imageSettings")).define("viewof imageSettings", ["columns","slider"], function(columns,slider){return(
columns({ 
  scale: slider({
    title: 'Render Scale',
    description: 'Decrease for faster rendering',
    value: 0.1,
    step: 0.1,
    min: 0.1,
    max: 1
  }),
  maxDepth: slider({
    title: 'Max Depth',
    description: 'How many bounces a single ray can make',
    value: 1,
    step: 1,
    min: 1,
    max: 16
  })
})
)});
  main.variable(observer("imageSettings")).define("imageSettings", ["Generators", "viewof imageSettings"], (G, _) => G.input(_));
  main.variable(observer("viewof sceneSettings")).define("viewof sceneSettings", ["columns","slider","color"], function(columns,slider,color){return(
columns({
  diffuseFactor: slider({
    title: 'Diffuse Factor',
    description: 'How much color to reflect from diffuse rays',
    value: 0.5,
    step: 0.01,
    min: 0.01,
    max: 1
  }),
  lightPower: slider({
    title: 'Light Power',
    description: 'Power level of the light.',
    value: 1,
    step: 0.1,
    min: 0,
    max: 2
  }),
  lightColor: color({
    title: 'Light Color',
    value: '#ffffff'
  }),
  ambient: color({
    title: 'Ambient Color',
    value: '#000000'
  }),
})
)});
  main.variable(observer("sceneSettings")).define("sceneSettings", ["Generators", "viewof sceneSettings"], (G, _) => G.input(_));
  main.variable(observer("viewof lightAxis")).define("viewof lightAxis", ["columns","slider"], function(columns,slider){return(
columns({
    lightX: slider({
    title: 'Light X',
    description: 'X Position of Light',
    value: 0,
    step: 0.01,
    min: -12,
    max: 12
  }),
    lightY: slider({
    title: 'Light Y',
    description: 'Y Position of Light',
    value: 1.70,
    step: 0.01,
    min: -12,
    max: 12
  }),
    lightZ: slider({
    title: 'Light Z',
    description: 'Z Position of Light',
    value: 0,
    step: 0.01,
    min: -12,
    max: 12
  }),
})
)});
  main.variable(observer("lightAxis")).define("lightAxis", ["Generators", "viewof lightAxis"], (G, _) => G.input(_));
  main.variable(observer("viewof sqrtPixelSamples")).define("viewof sqrtPixelSamples", ["slider"], function(slider){return(
slider({
    title: 'Image Quality (Sampling Level)',
    description: 'Square root of how many samples to take per pixel',
    value: 1,
    step: 1,
    min: 1,
    max: 8
})
)});
  main.variable(observer("sqrtPixelSamples")).define("sqrtPixelSamples", ["Generators", "viewof sqrtPixelSamples"], (G, _) => G.input(_));
  main.variable(observer("viewof textureOpt")).define("viewof textureOpt", ["radio"], function(radio){return(
radio({
    title: "Texture",
    description: 'enable/disable texture',
    options: [{label:"Disable",value:0},{label:"Enable",value:1}],
    value: 0
  })
)});
  main.variable(observer("textureOpt")).define("textureOpt", ["Generators", "viewof textureOpt"], (G, _) => G.input(_));
  main.variable(observer("viewof Scenes")).define("viewof Scenes", ["columns","radio"], function(columns,radio){return(
columns({
    molSelect: radio({
    title: "Molecules",
    description: 'Change molecules',
    options: [{label:"Ethanol",value:0},{label:"Aspirin",value:1},{label:"Caffeine",value:2},{label:"Nicotine",value:3},{label:"LSD",value:4},{label:"Cocaine",value:5},{label:"Cholesterol",value:6}, {label:"Lycopene",value:7},{label:"Copper",value:8},{label:"Fluorite",value:9},{label:"Glucose",value:10},{label:"Salt",value:11},{label:"YBCO superconductor",value:12}, {label:"Buckyball",value:13},{label:"Graphite",value:14},{label:"Aluminium oxide",value:15},{label:"Cubane",value:16}],
    value: 0
  }),
  cornellBox: radio({
    title: "Cornell Box",
    description: 'Change scene to cornell box',
    options: [{label:"disable",value:0},{label:"enable",value:1}],
    value: 1
  }),
})
)});
  main.variable(observer("Scenes")).define("Scenes", ["Generators", "viewof Scenes"], (G, _) => G.input(_));
  main.variable(observer("viewof sphereAlbedo")).define("viewof sphereAlbedo", ["slider"], function(slider){return(
slider({
  title: 'Sphere Albedo',
  description: 'Albedo for the sphere',
  value: 0,
  step: 0.1,
  min: 0,
  max: 1
})
)});
  main.variable(observer("sphereAlbedo")).define("sphereAlbedo", ["Generators", "viewof sphereAlbedo"], (G, _) => G.input(_));
  main.variable(observer()).define(["render"], function(render){return(
render()
)});
  main.variable(observer()).define(["md"], function(md){return(
md `## Viewport Properties`
)});
  main.variable(observer("viewportWidth")).define("viewportWidth", ["imageSettings"], function(imageSettings){return(
960 * imageSettings.scale
)});
  main.variable(observer("viewportHeight")).define("viewportHeight", ["imageSettings"], function(imageSettings){return(
540 * imageSettings.scale
)});
  main.variable(observer("focalLength")).define("focalLength", function(){return(
1
)});
  main.variable(observer("frameHeight")).define("frameHeight", function(){return(
2
)});
  main.variable(observer()).define(["md"], function(md){return(
md`# Raytracer Animation`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## Animation Parameters`
)});
  main.variable(observer("viewof box_toggles")).define("viewof box_toggles", ["columns","color"], function(columns,color){return(
columns({
  sphere_col: color({
     value: "#ff0000",
     description: "Select sphere color"
  }),
  box_col: color({
    value: "#3700ff",
    description: "Select box color"
  })
})
)});
  main.variable(observer("box_toggles")).define("box_toggles", ["Generators", "viewof box_toggles"], (G, _) => G.input(_));
  main.variable(observer("viewof sphere_radius")).define("viewof sphere_radius", ["mutableForm","slider"], function(mutableForm,slider){return(
mutableForm(slider({
  min:65, 
  max:100, 
  precision:0, 
  step:1, 
  value: 75, 
  description: 'Select sphere radius'
}))
)});
  main.variable(observer("sphere_radius")).define("sphere_radius", ["Generators", "viewof sphere_radius"], (G, _) => G.input(_));
  main.variable(observer()).define(["md"], function(md){return(
md`## Ray Toggles`
)});
  main.variable(observer("viewof ray_toggles")).define("viewof ray_toggles", ["columns","slider"], function(columns,slider){return(
columns({
  num_rays_slider: slider({
    min: 2,
    max: 24,
    precision: 0,
    step: 1,
    value: 12,
    description: "Select number of rays"
  }),
  refraction_index: slider({
    min: 1,
    max: 2,
    precision: 1,
    step: 0.1,
    value: 1.5,
    description: 'Select refraction index'
  })
})
)});
  main.variable(observer("ray_toggles")).define("ray_toggles", ["Generators", "viewof ray_toggles"], (G, _) => G.input(_));
  main.variable(observer("viewof ray_toggles2")).define("viewof ray_toggles2", ["columns","radio"], function(columns,radio){return(
columns({
  mat : radio({
    description: 'Select object material',
    options: [
      { label: 'Transparent', value: 'glass' },
      { label: 'Opaque', value: 'opaque' }
    ],
    value: 'opaque'
  }),
  reflection : radio({
    description: 'Select type of reflection',
    options: [
      { label: 'Specular', value: 'specular' },
      { label: 'Diffuse', value: 'diffuse' },
      { label: 'No Reflection', value: 'none'}
    ],
    value: 'none'
  }),
  shadow_select : radio({
    description: 'Enable shadow rays',
    options: [
      {label: 'On', value: 'on'},
      {label: 'Off', value: 'off'}
    ],
    value: 'off'
  })
})
)});
  main.variable(observer("ray_toggles2")).define("ray_toggles2", ["Generators", "viewof ray_toggles2"], (G, _) => G.input(_));
  main.variable(observer()).define(["md"], function(md){return(
md`## Sphere 2 Parameters`
)});
  main.variable(observer("viewof occluder_toggles")).define("viewof occluder_toggles", ["columns","color","radio"], function(columns,color,radio){return(
columns({
  occluder_col: color({
     value: "#00eeff",
     description: "Select sphere color"
  }),
  enable_occluder: radio({
    options: [
      { label: 'On', value: 'on' },
      { label: 'Off', value: 'off' }
    ],
    value: 'off',
    description: "Enable sphere (will disable reflection)"
  })
})
)});
  main.variable(observer("occluder_toggles")).define("occluder_toggles", ["Generators", "viewof occluder_toggles"], (G, _) => G.input(_));
  main.variable(observer("viewof cast")).define("viewof cast", ["html"], function(html)
{
  let value = 0;
  const button = html`<button>Play/Clear`;
  Object.defineProperty(button, "value", {get() { return value; }});
  button.onclick = () => value= (value+1) % 2;
  return button;
}
);
  main.variable(observer("cast")).define("cast", ["Generators", "viewof cast"], (G, _) => G.input(_));
  main.variable(observer()).define(["svg"], function(svg){return(
svg.node()
)});
  main.variable(observer()).define(["md"], function(md){return(
md `## Raytracer`
)});
  main.variable(observer("Raytracer")).define("Raytracer", ["vert","frag","viewportWidth","viewportHeight","frameHeight","focalLength","regl","imageSettings","planeTexture","cubeTexture","sqrtPixelSamples","sceneSettings","size","Spheres","textureOpt","mkcolor","sphereAlbedo","Scenes","Colors","Box_min","Box_max","lightAxis"], function(vert,frag,viewportWidth,viewportHeight,frameHeight,focalLength,regl,imageSettings,planeTexture,cubeTexture,sqrtPixelSamples,sceneSettings,size,Spheres,textureOpt,mkcolor,sphereAlbedo,Scenes,Colors,Box_min,Box_max,lightAxis){return(
{
  vert: vert,
  frag: frag,
  attributes: { position: [[-1, -1], [-1, 1], [1, 1], [1, -1]] },
  elements: [[0, 1, 2], [0, 2, 3]],
  uniforms: {
    aspect: viewportWidth / viewportHeight,
    frameHeight: frameHeight,
    focalLength: focalLength,
    pixelSize: frameHeight / viewportHeight,
    world: regl.prop('world'),
    maxDepth: imageSettings.maxDepth,
    planeTexture: planeTexture,
    sphereTexture: planeTexture,
    cubeTexture: cubeTexture,
    sqrtPixelSamples: sqrtPixelSamples,
    diffuseFactor: sceneSettings.diffuseFactor,
    numObjects: size,
    objects: Spheres,
    texture: (textureOpt == 1) ? 1 : 0,
    ambient: mkcolor(sceneSettings.ambient),
    lightPower: sceneSettings.lightPower,
    lightColor: mkcolor(sceneSettings.lightColor),
    sphereAlbedo: sphereAlbedo,
    cornell: (Scenes.cornellBox == 1) ? 1 : 0,
    objects_color: Colors,
    boxMinX: Box_min[0],
    boxMinY: Box_min[1],
    boxMinZ: Box_min[2],
    boxMaxX: Box_max[0],
    boxMaxY: Box_max[1],
    boxMaxZ: Box_max[2],
    lightHori: lightAxis.lightX,
    lightVert: lightAxis.lightY, 
    lightDepth: lightAxis.lightZ
    //seed: regl.prop(`seed`)
  }
}
)});
  main.variable(observer("fragHead")).define("fragHead", function(){return(
`
  precision mediump float;

  const float POSITIVE_INFINITY = 1.0 / 0.0;
  const float FLOAT_ZERO = 0.001;
  const float EPSILON = 0.0001;
  const int SQRT_PIXEL_SAMPLES = 8; // Square root of number of pixel samples to take.
  const int DEPTH = 1;//50;
  const int OBJECTS_IN_SCENE = 20;

  const int GEOMETRY_SPHERE = 0;
  const int GEOMETRY_PLANE = 1;
  const int GEOMETRY_BOX = 2;

  uniform float frameHeight;
  uniform float pixelSize;
  uniform float lightPower;
  uniform vec3 eye;
  uniform vec3 ambient;
  uniform vec3 lightColor;
  uniform mat4 world;
  uniform float sphereAlbedo;
  
  uniform int texture;
  uniform sampler2D planeTexture;
  uniform sampler2D sphereTexture;
  uniform samplerCube cubeTexture;

  uniform float diffuseFactor;
  uniform int maxDepth;
  uniform int sqrtPixelSamples;
  uniform int cornell;
  
  uniform int numObjects;
  uniform sampler2D objects;
  uniform sampler2D objects_color;

  uniform float boxMinX;
  uniform float boxMinY;
  uniform float boxMinZ;

  uniform float boxMaxX;
  uniform float boxMaxY;
  uniform float boxMaxZ;

  uniform float lightHori;
  uniform float lightVert;
  uniform float lightDepth;

  varying vec3 fragPosition;
 
  float sampleDelta = pixelSize / float(sqrtPixelSamples);
  float patternSize = 5.0;

  struct Ray
  {
    vec3 origin;
    vec3 direction;
  };  

  /* Can't use interfaces or abstract classes
     We could nest the structs that we had previously, but 
     GLSL also does not allow NULL objects, so we can't just hold one type of each object
     We would have to generate a Sphere, Plane, and Cube to hold all of them in one object
     That would be a waste of memory. Instead holding general attributes for each object */
  struct Hitable
  {
    // Set the type of geometry of this object
    // Only one should ever be set!
    int geometry;

    // Mainly used for the plane
    vec3 normal;
    // Center of the object all math will have to based on the center and the size
    vec3 center;
    /* Size of the object
        For Sphere: The Radius of the sphere
        For Planes: The size of a single edge, 0 means infinite
        For Boxes: Height/Depth/Length of the box's edge */
    float size;

    // Sets boundary for Box
    vec3 vmin;
    vec3 vmax;

    // Color of object
    vec3 color;
    bool textured;
    float albedo;
    float shininess;
    float refractionCoe;
    bool isRefract;
  };

  // Constant "NULL" hitable if it is ever needed
  Hitable EMPTY_HITABLE = Hitable(GEOMETRY_SPHERE, vec3(-1,-1,-1), 
    vec3(-1,-1,-1), 0.0, vec3(0),vec3(0), vec3(0), false, 0.0, 0.0, 1.0, false);
  
  // Array of all objects in a scene
  Hitable WorldObjects[OBJECTS_IN_SCENE];

  // Holds the record of a hit if it did happen
  struct HitRecord {
    float t;
    vec3 p;
    vec3 normal;
    bool front_face;
    Hitable objectHit;
  };

  // Description of a point light source.
  struct Light
  {
    float power;
    vec3 color;
    vec3 position;
  };

  // There is 1 point light source in the scene (for now).
  Light light = Light(lightPower, lightColor, vec3(lightHori, lightVert, lightDepth));

  // This is where we have to add all of the objects that we are generating in the world
  void populateWorld();

  // Gets the color of a ray based on what it intersects.
  vec3 rayGetColor(Ray r);

  // Gets the intersection point of a ray.
  vec3 rayGetIntersection(Ray r, float t);

  // Returns the color of a ray when it hits nothing.
  vec3 rayGetSky(Ray r);

  // Shoots an eye ray from the eye through this fragment with a given fragment position offset.
  Ray rayShootEye(float xOffset, float yOffset);

  // Shoots a diffuse ray from a point on a surface.
  Ray rayShootDiffuse(Ray incoming, float t, vec3 normal);

  // Shoots a reflect ray from a point on a surface.
  Ray rayShootReflect(Ray incoming, float t, vec3 normal);

  // Shoots a refract ray from a point through a surface.
  Ray rayShootRefract(Ray incoming, float t, vec3 normal, float eta, bool front_face);

  // Shoots a shadow ray from a point on a surface to a light source.
  Ray rayShootShadow(Ray incoming, float t, Light l);

  // Gets the color of a subpixel by tracing rays.
  vec3 rayTrace(float xOffset, float yOffset);

  // Shoots a ray from a position in the world towards a given direction.
  Ray rayBounceFromTowards(Ray prevRay, vec3 origin, vec3 direction);

  // Returns true if the ray intersects anything.
  bool hitAnything(Ray r, float t_min, float t_max, inout HitRecord rec);

  // Gets the color of a hittable object.
  vec3 hitableGetColor(Hitable object, vec3 intersect);

  // Gets the color of a sphere based a valid intersection point.
  vec3 sphereGetColor(Hitable sphere, vec3 intersect);

  // Returns true if the ray intersects the sphere.
  bool sphereIntersect(Ray r, Hitable s, float t_min, float t_max, inout HitRecord rec);

  // Gets the color of a plane based on a valid intersection point.
  vec3 planeGetColor(Hitable plane, vec3 intersect);

  // Returns true if the ray intersects the plane.
  bool planeIntersect(Ray r, Hitable plane, float t_min, float t_max, inout HitRecord rec);

  // Gets the color of a cube based on a valid intersection point.
  vec3 boxGetColor(Hitable cube, vec3 intersect);

  // Returns true if the ray intersects the box.
  bool boxIntersect(Ray r, Hitable box, float t_min, float t_max, inout HitRecord rec);

  // set the Hit record to contain if this is a outward facing face
  void setFaceNormal(Ray r, inout HitRecord rec, vec3 outward_normal);

  // Returns a random point inside the unit sphere.
  vec3 randInUnitSphere(Ray r);
  
  float fresnel(Ray ray, HitRecord rec);

  float rand(vec2 co);

  // Modulo 3 function.
  int mod3(int a);
`
)});
  main.variable(observer("fragBody")).define("fragBody", function(){return(
`
void main()
{
  vec3 color = vec3(0, 0, 0);
  Ray ray;

  float sampleOffset = pixelSize / -2.0 + sampleDelta / 2.0;

  //Populate the objects in the world
  populateWorld();

  // Shoot SQRT_PIXEL_SAMPLES ^ 2 rays for each pixel
  for (int i = 0; i != SQRT_PIXEL_SAMPLES; i++)
  {
    // Check if we have exceeded max samples, via uniform value
    if (i == sqrtPixelSamples) { break; }

    for (int j = 0; j != SQRT_PIXEL_SAMPLES; j++)
    {
      // Check if we have exceeded max samples, via uniform value
      if (j == sqrtPixelSamples) { break; }

      //ray = rayShootEye(sampleOffset + float(i) * sampleDelta, sampleOffset + float(j) * sampleDelta);
      //color += rayGetColor(ray);

      color += rayTrace(sampleOffset + float(i) * sampleDelta, sampleOffset + float(j) * sampleDelta);
    }
  }

  // Calculate final color of pixel
  gl_FragColor = vec4(color / float(sqrtPixelSamples * sqrtPixelSamples), 1);
}

void populateWorld()
{
  // First three variables say what type of object this is (Sphere, Plane, Cube) only one should be true
  // Next variables are the attributes of the object, refer to the hittable struct

  
//Loading sphere data from texture
if(cornell == 0)
{
  for(int i = 0; i < OBJECTS_IN_SCENE-1; i++)
  {
    vec2 coord = vec2(float(i)/float(numObjects), 0);
    vec2 color_coord = vec2(float(i)/float(numObjects), 0);
    vec4 spheres = texture2D(objects, coord);
    vec4 colors = texture2D(objects_color, color_coord);
    WorldObjects[i] = Hitable(GEOMETRY_SPHERE, vec3(0,1,0), spheres.xyz, spheres.w, vec3(0),vec3(0), colors.xyz/255.0, true, 1.0, 32.0, 1.0, false);
    }

  WorldObjects[OBJECTS_IN_SCENE-1] = Hitable(
    GEOMETRY_BOX, vec3(0, 1, 0), vec3(0, 0, 0), 0.0, vec3(boxMinX,boxMinY,boxMinZ), vec3(boxMaxX,boxMaxY,boxMaxZ) , vec3(0.75),
    false, 1.0, 0.0, 1.0, false
  );

}

else if(cornell == 1)
{
  //blue sphere
  WorldObjects[0] = Hitable(
    GEOMETRY_SPHERE, vec3(0, 1, 0), vec3(0, -1.3, 0.0), 0.75, vec3(0), vec3(0), vec3(0.1, 0.3, 0.6), true, sphereAlbedo, 32.0, 1.0, false
  );

  //left
  WorldObjects[1] = Hitable(
    GEOMETRY_BOX, vec3(0, 1, 0), vec3(0, 0, 0), 0.0,vec3(-2.0, -2.0, -2.0),vec3(2.0, 2.0, -2.0), vec3(0.95,0.25,0.25),
    false, 1.0, 0.0, 1.0, false
  );
  //right
  WorldObjects[2] = Hitable(
    GEOMETRY_BOX, vec3(0, 1, 0), vec3(0, 0, 0), 0.0,vec3(-2.0, -2.0, 2.0),vec3(2.0, 2.0, 2.0), vec3(0.25,0.65,0.25),
    false, 1.0, 0.0, 1.0, false
  );
  //bottom
  WorldObjects[3] = Hitable(
    GEOMETRY_BOX, vec3(0, 1, 0), vec3(0, 0, 0), 0.0, vec3(2.0, -2.0, -2.0),vec3(-2.0, -2.0, 2.0), vec3(0.75,0.75,0.75),
    false, 1.0, 0.0, 1.0, false
  );
  //top
  WorldObjects[4] = Hitable(
    GEOMETRY_BOX, vec3(0, 1, 0), vec3(0, 0, 0), 0.0,vec3(-2.0, 2, -2.0),vec3(2.0, 2.0, 2.0), vec3(0.75,0.75,0.75),
    false, 1.0, 0.0, 1.0, false
  );
  //behind
  WorldObjects[5] = Hitable(
    GEOMETRY_BOX, vec3(0, 1, 0), vec3(0, 0, 0), 0.0,vec3(-2.0, -2.0, -2.0),vec3(-2.0, 2.0, 2.0), vec3(0.75,0.75,0.75),
    false, 1.0, 0.0, 1.0, false
  );

  //box
  WorldObjects[6] = Hitable(
    GEOMETRY_BOX, vec3(0, 1, 0), vec3(0, 0, 0), 0.0,vec3(0.55, -2.0, -0.8),vec3(1.2, -1.0, -1.3), vec3(0.75,0.75,0.75),
    false, 1.0, 0.0, 1.0e6, false
  );

  //cyan sphere
  WorldObjects[7] = Hitable(
    GEOMETRY_SPHERE, vec3(0, 1, 0), vec3(-1, -.75, -1.25), 0.65, vec3(0), vec3(0), vec3(0.4, 0.75, 0.75), true, 1.0, 32.0, 1.0, false
  );

  //magenta sphere
  WorldObjects[8] = Hitable(
    GEOMETRY_SPHERE, vec3(0, 1, 0), vec3(1, -1.5, 1.25), 0.55, vec3(0), vec3(0), vec3(0.0), true, 1.0, 32.0, 1.33, true
  );
}
}

float rand(vec2 co) { return fract(sin(dot(co.xy, vec2(12.9898,78.233))) * 43758.5453); }

float texture_coordinate(float coord, float size) { return coord / size; }

vec3 R(vec3 I, vec3 normal, float ior) 
{ 
    float cosi = clamp(-1.0, 1.0, dot(I, normal));
    float etai = 1.0;
    float etat = ior;

    vec3 n = normal; 
    if (cosi < 0.0) { cosi = -cosi; } else { etai = etat; etat= ior; n= -normal; } 
    float eta = etai / etat; 
    float k = 1.0 - eta * eta * (1.0 - cosi * cosi); 
    return k < 0.0 ? vec3(0.0) : eta * I + (eta * cosi - sqrt(k)) * n; 
} 

vec3 rayTrace(float xOffset, float yOffset)
{
  const int iterations = 13;
  Ray rays[iterations];
  HitRecord hits[iterations];
  float k[iterations];
  
  vec3 finalColor = vec3(0);

  for (int ray = 0; ray < iterations; ray++)
  {
    //int parent = (ray + 2) / 3 - 1;
    int type = mod3(ray);
    //if (ray >= maxDepth) break;

    // Shoot the ray depending on its type.
    if (ray != 0)
    {
      // This is not an eye ray.
      Ray parentRay = rays[(ray + 2) / 3 - 1];
      HitRecord parentHit = hits[(ray + 2) / 3 - 1];
      //float parentK = k[(ray + 2) / 3 - 1];
      if (type == 1) rays[ray] = rayShootDiffuse(parentRay, parentHit.t, parentHit.normal);
      else if (type == 2) rays[ray] = rayShootReflect(parentRay, parentHit.t, parentHit.normal);
      else if (type == 0 && parentHit.objectHit.isRefract) rays[ray] = rayShootRefract(parentRay, 
            parentHit.t, parentHit.normal, parentHit.objectHit.refractionCoe, parentHit.front_face);
    }
    else rays[ray] = rayShootEye(xOffset, yOffset); // This is the eye ray.

    // Check the intersection of the ray.
    if (hitAnything(rays[ray], FLOAT_ZERO, POSITIVE_INFINITY, hits[ray]))
    {
      // Hit something, get color and store k of this ray.
      vec3 color = hitableGetColor(hits[ray].objectHit, rayGetIntersection(rays[ray], hits[ray].t));

      if (ray != 0)
      {
        Ray parentRay = rays[(ray + 2) / 3 - 1];
        HitRecord parentHit = hits[(ray + 2) / 3 - 1];
        float parentK = k[(ray + 2) / 3 - 1];
        float kthis = 0.0;

        // Set k for this node.
        if (type == 1) kthis = hits[ray].objectHit.albedo * diffuseFactor; // kd of previous material.
        else if (type == 2) kthis = parentHit.objectHit.isRefract ? 0.2 : 1.0 - parentHit.objectHit.albedo; // ks of previous material.
        else if (type == 0 && parentHit.objectHit.isRefract)
       {
          float ks = fresnel(parentRay, parentHit);
          Ray reflection = rayShootReflect(parentRay, parentHit.t, parentHit.normal);
          reflection.direction = normalize(reflection.direction);
          vec3 colorReflect = hitableGetColor(parentHit.objectHit, rayGetIntersection(reflection, parentHit.t));

          if(ks < 1.0)
          {
            color = colorReflect * ks + color*(1.0-ks);
          }
          else
          {
            color = colorReflect*ks;
          }
            kthis = 1.0;
      }
        k[ray] = parentK * kthis;

        // DO NOT UNCOMMENT THIS!!!
        //if (k[ray] < FLOAT_ZERO) continue;

        // Do ambient lighting depending on kx of previous materials.
        finalColor += color * ambient * k[ray];

        // Do basic lighting depending on kd of this material and kx of previous materials.
        HitRecord shadowRec;
        Ray shadow = rayShootShadow(rays[ray], hits[ray].t, light);
        shadowRec.t = POSITIVE_INFINITY;
        hitAnything(shadow, FLOAT_ZERO, shadowRec.t, shadowRec);

        float s = 0.0;
        if (shadowRec.t > length(light.position - shadow.origin)) s = 1.0;


        float align = dot(shadow.direction, hits[ray].normal);
        finalColor += s * color * hits[ray].objectHit.albedo * k[ray] * (align > 0.0 ? align : 0.0) * lightPower * lightColor;
      }
      else
      {
        // Set k for this node.
        k[ray] = 1.0;

        // Do ambient lighting.
        finalColor += color * ambient;
        
        // Do basic lighting depending on kd of this material.
        HitRecord shadowRec;
        Ray shadow = rayShootShadow(rays[ray], hits[ray].t, light);
        shadowRec.t = POSITIVE_INFINITY;
        hitAnything(shadow, FLOAT_ZERO, shadowRec.t, shadowRec);


        float s = 0.0;
        if (shadowRec.t > length(light.position - shadow.origin)) s = 1.0;

        float align = dot(shadow.direction, hits[ray].normal);
        finalColor += s * color * hits[ray].objectHit.albedo * (align > 0.0 ? align : 0.0) * lightPower * lightColor;
      }
    }
    else
    {
      // Hit nothing, get sky color and store 0 for this ray.
      // Set k for this node.
      k[ray] = 0.0;

      if (ray != 0)
      {
        // Do sky lighting depending on kx of previous materials.
        float parentK = k[(ray + 2) / 3 - 1];
        finalColor += rayGetSky(rays[ray]) * parentK;
      }
      else finalColor += rayGetSky(rays[ray]);
    }
  }

  return finalColor;
}

vec3 rayGetIntersection(Ray r, float t) { return r.origin + r.direction * t; }

vec3 rayGetSky(Ray r)
{
  float t = 0.5 * (r.direction.y + 1.0);
  //return (1.0 - t) * vec3(1, 1, 1) + t * vec3(0.5, 0.7, 1.0);
    return vec3(0);
}

Ray rayShootDiffuse(Ray incoming, float t, vec3 normal)
{
  Ray r;

  r.origin = rayGetIntersection(incoming, t);
  r.direction = normal;
  r.direction += randInUnitSphere(incoming);
  r.direction = normalize(r.direction);
  r.origin += EPSILON * r.direction;

  return r;
}

Ray rayShootEye(float xOffset, float yOffset)
{
  vec4 offset;
  Ray r;

  // Get the offset vector in world coordinates.
  offset = vec4(xOffset, yOffset, 0, 0);
  offset = world * offset;

  r.origin = eye;
  r.direction = normalize((fragPosition + offset.xyz) - eye);

  return r;
}

Ray rayShootReflect(Ray incoming, float t, vec3 normal)
{
  Ray r;

  r.origin = rayGetIntersection(incoming, t);
  r.direction = reflect(incoming.direction, normal);
  r.origin += EPSILON * r.direction;

  return r;
}

// Used to calcuatle Kr for color equation
float fresnel(Ray ray, HitRecord rec)
{
    float cos_i = clamp(-1.0, 1.0, dot(ray.direction, rec.normal));
    float eta_i = 1.0;
    float eta_t = rec.objectHit.refractionCoe;

    if(cos_i > 0.0)
    {
        eta_i = rec.objectHit.refractionCoe;
        eta_t = 1.0;
    }

    float sroot = 1.0 - cos_i * cos_i;
    float sin_t = eta_i / eta_t * sqrt( (sroot > 0.0 ? sroot : 0.0));
    if(sin_t >= 1.0 ) // Total Internal Reflection
        return 1.0;
    else
    {
        sroot = 1.0 - sin_t * sin_t;
        float cos_t = sqrt( (sroot > 0.0 ? sroot : 0.0));
        cos_i = abs(cos_i);
        float Rs = ((eta_t * cos_i) - (eta_i * cos_t)) / ((eta_t * cos_i) + (eta_i * cos_t)); 
        float Rp = ((eta_i * cos_i) - (eta_t * cos_t)) / ((eta_i * cos_i) + (eta_t * cos_t)); 
        return (Rs * Rs + Rp * Rp) / 2.0; 
    }
}

Ray rayShootRefract(Ray incoming, float t, vec3 normal, float eta, bool front_face)
{
  Ray r;

  r.direction = normalize(R(incoming.direction, normal, eta));
  r.origin = rayGetIntersection(incoming, t);
  r.origin += EPSILON * r.direction;

  return r;
}

Ray rayShootShadow(Ray incoming, float t, Light l)
{
  Ray r;

  r.origin = rayGetIntersection(incoming, t);
  r.direction = normalize(l.position - r.origin);
  r.origin += EPSILON * r.direction;

  return r;
}

vec3 hitableGetColor(Hitable object, vec3 intersect)
{
  int geometry = object.geometry;

  if (geometry == GEOMETRY_SPHERE) return sphereGetColor(object, intersect);
  else if (geometry == GEOMETRY_PLANE) return planeGetColor(object, intersect);
  else if (geometry == GEOMETRY_BOX) return boxGetColor(object, intersect);
  else return vec3(0);
}

vec3 randInUnitSphere(Ray r)
{
  /* Rejection method: Calculate a "random" position in unit cube, hoping to land inside unit sphere.
   * Increment i to change "seed" on fail.
   * Upon exiting the do-while loop, we now have a point with all 3 coords inside the unit sphere. */
  float randX, randY, randZ;
  vec3 point;
  const int MAX_ATTEMPTS = 10;

  for (int i = 0; i < MAX_ATTEMPTS; i++)
  {
    // Note: these calculations are arbitrary and are only done to get a semi-unique value for each intersection
    randX = rand(vec2( r.direction.yz*float(i-5) ));
    randY = rand(vec2( r.direction.xz*float(i-5) ));
    randZ = rand(vec2( r.direction.xy*float(i-5) ));
    point = vec3(randX, randY, randZ);

    // Break if inside unit sphere
    if (dot(point, point) > 1.0) {break;}
  }
  point.z -= 0.63;  // Hacky method to fix skewed rand issue
  return point;
}

vec3 sphereGetColor(Hitable s, vec3 intersect)
{
  vec3 color;
  intersect =  normalize(intersect - s.center);
  float phi = atan(intersect.z, intersect.x);
  float theta = asin(intersect.y);
  float pi = 3.1415926;
  float u = 1. - (phi + pi) / (2.* pi);
  float v = (theta + pi / 2.) / pi;
  if (texture == 1 && s.textured)
    return texture2D(sphereTexture, vec2(u,v)).rgb;
  else
    return s.color;
}   

bool sphereIntersect(Ray r, Hitable sphere, float t_min, float t_max, inout HitRecord rec) 
{
  vec3 displacement = r.origin - sphere.center;
  float a = dot(r.direction, r.direction);
  float b = -dot(displacement, r.direction);
  float c = dot(displacement, displacement) - sphere.size * sphere.size;
  float discriminant = b * b - a * c;

  // Negative discriminant will never intersect
  if (discriminant < FLOAT_ZERO) return false;

  float sqrtDiscrim = sqrt(discriminant);
  float root1 = b - sqrtDiscrim;
  float root2 = b + sqrtDiscrim;

  float root = root1 < t_min ? root2 : root1;
  if(root < t_min || root > t_max )
      return false;

  rec.t = root;
  rec.p = rayGetIntersection(r, root);
  rec.normal = (rec.p - sphere.center) / sphere.size;

  return true;
}

vec3 planeGetColor(Hitable p, vec3 intersect)
{
  // Assumes plane is parallel with the XZ plane.
  // u == x, v == z
  float u = texture_coordinate(intersect.x, patternSize);
  float v = texture_coordinate(intersect.z, patternSize);
  if(texture == 1 && p.textured)
    return texture2D(planeTexture, vec2(u, v)).rgb;
  else
    return p.color;
}

bool planeIntersect(Ray r, Hitable plane, float t_min, float t_max, inout HitRecord rec)
{
  vec3 displacement = r.origin - plane.center;
  float t = -dot(plane.normal, displacement);
  float parallelity = dot(plane.normal, r.direction);
  if (sign(t) == sign(parallelity))
  {
      rec.t = t / parallelity;
      rec.normal = plane.normal;
      rec.p = displacement;
      return true;
  }
  else
  {
      return false;
  }
}

vec3 getBoxNormal(vec3 point, Hitable box)
{
  float EPSI = 0.00001;
  
  if(abs(point.x - box.vmin.x) < EPSI)
    return vec3(-1,0,0);
  else if(abs(point.x - box.vmax.x) < EPSI)
    return vec3(1,0,0);
  else if(abs(point.y - box.vmin.y) < EPSI)
    return vec3(0,-1,0);
  else if(abs(point.y - box.vmax.y) < EPSI)
    return vec3(0,1,0);
  else if(abs(point.z - box.vmin.z) < EPSI)
    return vec3(0,0,-1);
  else if(abs(point.z - box.vmax.z) < EPSI)
    return vec3(0,0,1);

  return vec3(0);
}

//AABB method
bool boxIntersect(Ray r, Hitable box, float t_min, float t_max, inout HitRecord rec)
{

  float temp;
  float t;

  float tmin = (box.vmin.x - r.origin.x)/r.direction.x;
  float tmax = (box.vmax.x - r.origin.x)/r.direction.x;

  if (tmin > tmax) 
  { 
    temp = tmin;
    tmin = tmax;
    tmax = temp;
  }

  float tymin = (box.vmin.y - r.origin.y)/r.direction.y;
  float tymax = (box.vmax.y - r.origin.y)/r.direction.y;

  if (tymin > tymax) 
  { 
    temp = tymin;
    tymin = tymax;
    tymax = temp;
  }

  if ((tmin > tymax) || (tymin > tmax))
     return false;
  
  if (tymin > tmin)
    tmin = tymin;
  
  if (tymax < tmax)
    tmax = tymax;
  
  float tzmin = (box.vmin.z - r.origin.z)/r.direction.z;
  float tzmax = (box.vmax.z - r.origin.z)/r.direction.z;

  if (tzmin > tzmax) 
  { 
    temp = tzmin;
    tzmin = tzmax;
    tzmax = temp;
  }

  if ((tmin > tzmax) || (tzmin > tmax))
     return false;
  
  if (tzmin > tmin)
    tmin = tzmin;
  
  if (tzmax < tmax)
    tmax = tzmax;

t = tmin < t_min ? tmax : tmin;

if(t < t_max && t > t_min)
{

  rec.t = t;
  rec.p = rayGetIntersection(r, rec.t);
  rec.normal = getBoxNormal(rec.p, box);
  return true;
}
 else
  return false;

}

vec3 boxGetColor(Hitable c, vec3 intersect) { return c.color; }

void setFaceNormal(Ray r, inout HitRecord rec, vec3 outward_normal) {
  rec.front_face = dot(r.direction, outward_normal) < 0.0;
  rec.normal = rec.front_face ? outward_normal : -outward_normal;
}

bool hitAnything(Ray r, float t_min, float t_max, inout HitRecord rec) 
{
  HitRecord temp_rec;
  bool hit_anything = false;
  float closest_so_far = t_max;

  // Iterate over all of the objects in the world, finding the closest intersection to the camera
  for (int i = 0; i < OBJECTS_IN_SCENE; i++) 
  {
    int geometry = WorldObjects[i].geometry;
    if (geometry == GEOMETRY_SPHERE && sphereIntersect(r, WorldObjects[i], t_min, closest_so_far, temp_rec)) 
    {
      hit_anything = true;
      if(temp_rec.t < closest_so_far)
      {
        setFaceNormal(r, temp_rec, temp_rec.normal);
        temp_rec.objectHit = WorldObjects[i];
        closest_so_far = temp_rec.t;
        // We set temp_rec, makesure that it is returned
        rec = temp_rec;
      }
    }
    else if (geometry == GEOMETRY_BOX && boxIntersect(r, WorldObjects[i], t_min, closest_so_far, temp_rec)) 
    {
      hit_anything = true;
      if(temp_rec.t < closest_so_far)
      {
        setFaceNormal(r, temp_rec, temp_rec.normal);
        temp_rec.objectHit = WorldObjects[i];
        closest_so_far = temp_rec.t;
        // We set temp_rec, makesure that it is returned
        rec = temp_rec;
      }
    }
    else if (geometry == GEOMETRY_PLANE && planeIntersect(r, WorldObjects[i], t_min, closest_so_far, temp_rec)) 
    { 
      hit_anything = true;
      if(temp_rec.t < closest_so_far)
      {
        setFaceNormal(r, temp_rec, temp_rec.normal);
        temp_rec.objectHit = WorldObjects[i];
        closest_so_far = temp_rec.t;
        // We set temp_rec, makesure that it is returned
        rec = temp_rec;
      }
    }
    // TODO: Add check for cube
  }

  return hit_anything;
}

int mod3(int a)
{
  int q = a / 3;

  if ((a + 1) / 3 == q + 1) return 2;
  if ((a + 2) / 3 == q + 1) return 1;
  if ((a + 3) / 3 == q + 1) return 0;
}
`
)});
  main.variable(observer("frag")).define("frag", ["fragHead","fragBody"], function(fragHead,fragBody){return(
fragHead + fragBody
)});
  main.variable(observer("vert")).define("vert", function(){return(
`
  precision mediump float;

  attribute vec2 position;
  
  uniform float aspect;
  uniform float focalLength;
  uniform float frameHeight;
  uniform vec3 eye;
  uniform mat4 world;

  varying vec3 fragPosition;

  void main()
  {
    // Coordinates of the frame corner in camera space.
    vec4 frameCorner = vec4(position.x * frameHeight / 2.0 * aspect, position.y * frameHeight / 2.0, -focalLength, 1);

    // Convert camera space into world space.
    fragPosition = (world * frameCorner).xyz;

    gl_Position = vec4(position, 0, 1);
  }
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `## Textures`
)});
  main.variable(observer("planeTextureImage")).define("planeTextureImage", ["image_from_URL"], function(image_from_URL){return(
image_from_URL("https://3.bp.blogspot.com/-v6Qth7fAYxc/U0GQ6HYMubI/AAAAAAAAAg8/GT3VrrSUtnE/s1600/canjiquinha+bump.jpg")
)});
  main.variable(observer("planeTexture")).define("planeTexture", ["regl","planeTextureImage"], function(regl,planeTextureImage){return(
regl.texture({
  data: planeTextureImage,
  wrap: 'repeat',
  min: 'mipmap',
  mag: 'linear'
})
)});
  main.variable(observer("sphereTextureImage")).define("sphereTextureImage", ["image_from_URL"], function(image_from_URL){return(
image_from_URL("https://1.bp.blogspot.com/-a8f5kAODTgg/T56O2B4awaI/AAAAAAAAAhM/mWd3ps0i_rI/s1600/metal1_notile.png")
)});
  main.variable(observer("sphereTexture")).define("sphereTexture", ["regl","sphereTextureImage"], function(regl,sphereTextureImage){return(
regl.texture({
  data: sphereTextureImage,
  flipY: true,
  wrap: 'repeat',
  min: 'mipmap',
  mag: 'linear'
})
)});
  main.variable(observer("cubeTexture")).define("cubeTexture", ["regl","planeTextureImage"], function(regl,planeTextureImage){return(
regl.cube(planeTextureImage, planeTextureImage, planeTextureImage, planeTextureImage, planeTextureImage, planeTextureImage)
)});
  main.variable(observer()).define(["md"], function(md){return(
md `## Molecules`
)});
  main.variable(observer("molObject")).define("molObject", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("Molecule-7.json").json()
)});
  main.variable(observer("molecules")).define("molecules", ["molObject"], function(molObject){return(
[molObject.Ethanol, molObject.Aspirin, molObject.Caffeine, molObject.Nicotine, molObject.LSD, molObject.Cocaine, molObject.Cholesterol, molObject.Lycopene, molObject.Copper, molObject.Fluorite, molObject.Glucose, molObject.Salt, molObject.YBCO_superconductor, molObject.Buckyball, molObject.Graphite, molObject.Aluminium_oxide, molObject.Cubane]
)});
  main.variable(observer("balls")).define("balls", ["molecules","Scenes"], function(molecules,Scenes){return(
new Float32Array(molecules[Scenes.molSelect].quadruples)
)});
  main.variable(observer()).define(function(){return(
800/4
)});
  main.variable(observer("colors")).define("colors", ["molecules","Scenes"], function(molecules,Scenes){return(
new Float32Array(molecules[Scenes.molSelect].color)
)});
  main.variable(observer("Box_min")).define("Box_min", ["molecules","Scenes"], function(molecules,Scenes){return(
new Float32Array(molecules[Scenes.molSelect].box.min)
)});
  main.variable(observer("Box_max")).define("Box_max", ["molecules","Scenes"], function(molecules,Scenes){return(
new Float32Array(molecules[Scenes.molSelect].box.max)
)});
  main.variable(observer("size")).define("size", ["balls"], function(balls){return(
balls.length/4
)});
  main.variable(observer("color_size")).define("color_size", ["colors"], function(colors){return(
colors.length/4
)});
  main.variable(observer("Spheres")).define("Spheres", ["regl","size","balls"], function(regl,size,balls){return(
regl.texture({
        width: size,
        height: 1,
        data: balls,
        type: 'float',
        min: 'nearest'
})
)});
  main.variable(observer("Colors")).define("Colors", ["regl","color_size","colors"], function(regl,color_size,colors){return(
regl.texture({
        width: color_size,
        height: 1,
        data: colors,
        type: 'float',
        min: 'nearest'
})
)});
  main.variable(observer()).define(["md"], function(md){return(
md `## REGL`
)});
  main.variable(observer("render")).define("render", ["camera","vec3","mat4","regl","renderRaytracer","CanvasObject"], function(camera,vec3,mat4,regl,renderRaytracer,CanvasObject){return(
function* render() {
  while (true) {
    camera(function () {
      // Make world transformation matrix for frame
      let x = vec3.fromValues(1, 0, 0),
          y = vec3.fromValues(0, 1, 0),
          z = vec3.create()
      vec3.normalize(z, camera.eye)
      vec3.cross(x, y, z)
      vec3.normalize(x, x)
      vec3.cross(y, z, x)
      vec3.normalize(y, y)
      let world = mat4.fromValues(
        x[0], x[1], x[2], 0,
        y[0], y[1], y[2], 0,
        z[0], z[1], z[2], 0,
        camera.eye[0], camera.eye[1], camera.eye[2], 1
      )

      // Now render
      regl.clear({
        color: [ 0.5, 0.5, 0.5, 1.0 ]
      })
      renderRaytracer({ world: world})
    })
    yield CanvasObject.canvas
  }
}
)});
  main.variable(observer("renderRaytracer")).define("renderRaytracer", ["regl","Raytracer"], function(regl,Raytracer){return(
regl(Raytracer)
)});
  main.variable(observer("camera")).define("camera", ["createCamera","regl","Box_min","Box_max"], function(createCamera,regl,Box_min,Box_max)
{
  return createCamera(regl, {
    distance: 2.75,
    renderOnDirty: false,
    noScroll: true,
    damping: 0.9,
    center: [(Box_min[0]+Box_max[0])/2,(Box_min[1]+Box_max[1])/2,(Box_min[2]+Box_max[2])/2]
  });
}
);
  main.variable(observer("CanvasObject")).define("CanvasObject", ["DOM","viewportWidth","viewportHeight"], function(DOM,viewportWidth,viewportHeight){return(
{ canvas: DOM.canvas(viewportWidth, viewportHeight) }
)});
  main.variable(observer("regl")).define("regl", ["createRegl","CanvasObject"], function(createRegl,CanvasObject){return(
createRegl({canvas:CanvasObject.canvas, extensions: ['oes_texture_float']})
)});
  main.variable(observer()).define(["md"], function(md){return(
md `## Animation Code`
)});
  main.variable(observer("reflection_state")).define("reflection_state", ["ray_toggles2"], function(ray_toggles2){return(
ray_toggles2.reflection
)});
  main.variable(observer()).define(["occluder_toggles","ray_toggles2","reflection_state"], function(occluder_toggles,ray_toggles2,reflection_state)
{
  if(occluder_toggles.enable_occluder == 'on')
  {
    ray_toggles2.reflection = 'none'; 
  }
  
  else
  {
    ray_toggles2.reflection = reflection_state;
  }
}
);
  main.variable(observer("svg")).define("svg", ["d3","DOM","width","height","create_circle","eye","create_text","lens_x","lens_y_min","ray_lens_intersect","circleCenterX","circleCenterY","sphere_radius","box_toggles","ray_toggles2","light_coordinates","create_rect","occluder_toggles","occluderCenterX","occluderCenterY","occluderRadius"], function(d3,DOM,width,height,create_circle,eye,create_text,lens_x,lens_y_min,ray_lens_intersect,circleCenterX,circleCenterY,sphere_radius,box_toggles,ray_toggles2,light_coordinates,create_rect,occluder_toggles,occluderCenterX,occluderCenterY,occluderRadius)
{ 
  // Draw canvas
  let svg = d3.select(DOM.svg(width, height));
  svg.append('g').attr('id', 'background-container').append('rect').attr('width', width).attr('height', height).attr('fill', '#1a1a1a');
  
 
  
  // Draw the camera eye
  let camera_container = svg.append('g').attr('id', 'camera_container');
  create_circle(camera_container, eye.x, eye.y, 12);
  create_text(camera_container, eye.x, eye.y - (1/5)*eye.y, 'Camera Eye');
  
  // Draw the image lens
  let lens_container = svg.append('g').attr('id', 'sample_container');
  create_text(lens_container, lens_x, lens_y_min - (1/5)*lens_y_min, 'Sampled Pixels');
  ray_lens_intersect.forEach((ray) => {
    create_circle(lens_container, ray.x, ray.y, 4);
  });
  
  // Draw the sphere
  create_circle(svg, circleCenterX, circleCenterY, sphere_radius, box_toggles.sphere_col, ray_toggles2.mat=='glass' ? 'none' : box_toggles.sphere_col);
  
  // Draw the light source
  let light_container = svg.append('g').attr('id', 'light_container')
  // [width/2-30, height/7.]
  create_circle(light_container, light_coordinates[0], light_coordinates[1],20, "#FFF700","#FFF700");
  create_text(camera_container, light_coordinates[0], light_coordinates[1] - 50, 'Light Source');
  
  // Draw the walls/floor
  let wall_container = svg.append('g').attr('id','wall');
  let floor_container = svg.append('g').attr('id','floor');
  create_rect(wall_container,width-150, 0, 20, height, box_toggles.box_col);
  create_rect(floor_container,0, height-20, width, 20, box_toggles.box_col);
  
  // Draw the occluder
  if(occluder_toggles.enable_occluder == 'on')
    create_circle(svg, occluderCenterX, occluderCenterY, occluderRadius, occluder_toggles.occluder_col,occluder_toggles.occluder_col);
 
  return svg;
}
);
  main.variable(observer()).define(["cast","d3","width","eye","svg","ray_lens_intersect","calculatePath","ray_toggles","interpolate","line","box_toggles","create_ray_intersections","ray_toggles2","circleCenterX","circleCenterY","createDiffuse","calculateShadowRay","adjustedIntersection","occluderRadius","occluderCenterX","occluderCenterY","floorIntersection","wallIntersection","occluder_toggles","adjustedIntersection2_electric_boogalo","sphere_radius","light_coordinates"], function(cast,d3,width,eye,svg,ray_lens_intersect,calculatePath,ray_toggles,interpolate,line,box_toggles,create_ray_intersections,ray_toggles2,circleCenterX,circleCenterY,createDiffuse,calculateShadowRay,adjustedIntersection,occluderRadius,occluderCenterX,occluderCenterY,floorIntersection,wallIntersection,occluder_toggles,adjustedIntersection2_electric_boogalo,sphere_radius,light_coordinates)
{
  if (cast == 1) {
    d3.selectAll('#rays_container').remove();
    let x_offset = width - eye.x;
    let rays = svg.append('g').attr('id', 'rays_container');
    var ray_paths = [];
    let occ_min_x = 1e9;
    let min_x = 1e9;
    let max_x = -1e9;
    let deez = true; // do not remove

    // Get all paths for the rays from eye to intersection to reflection/refraction
    // reflection/refraction stored in index 2 & 3 respectively if intersection occurs
    // Additionally calculate min x value for use in animation interpolation
    ray_lens_intersect.forEach(ray => {
      let x = eye.x + x_offset;
      let y = eye.y + ray.slope * x_offset;
      var points = calculatePath(ray, x_offset, ray_toggles.refraction_index);
      ray_paths.push(points);
      occ_min_x  = points[1].x < 600 && points[1].x < occ_min_x ? points[1].x : occ_min_x;
      min_x = points[1].x < min_x ? points[1].x : min_x;
      //max_x = points[1].x > max_x ? points[1].x : max_x;
    });
   // console.log("occ_min_x: " + occ_min_x);

    // Create animations
    ray_paths.forEach(path => {
      // If the length of the path is 5 then intersections occured
      if (path.length == 5) {
        // Store the paths for each type of ray
        let intersect_path = [path[0], path[1]];
        let reflect_path = [path[1], path[2]];
        let refract_path = [path[1], path[3]];
        let refract_path2 = [path[3], path[4]];

        // Draw intersections in a janky manner that attempts to account for different intersection points

        let primary_path = intersect_path.slice();
        //primary
        
        let t = 1 - (primary_path[1].x - min_x) / primary_path[1].x;
        let interpolated_point = interpolate(
          [primary_path[0].x, primary_path[0].y],
          [primary_path[1].x, primary_path[1].y],
          t
        );

        // Draw from eye to interpolated point
        primary_path[1] = {
          x: interpolated_point[0],
          y: interpolated_point[1]
        };
        var draw_intersects = rays
          .append("path")
          .attr("d", line(primary_path))
          .attr("stroke", "steelblue")
          .attr("stroke-width", "2")
          .attr("fill", "none");
        var totalLength = draw_intersects.node().getTotalLength();
        draw_intersects
          .attr("stroke-dasharray", totalLength + " " + totalLength)
          .attr("stroke-dashoffset", totalLength)
          .transition()
          .duration(1500)
          .ease(d3.easeLinear)
          .attr("stroke-dashoffset", 0)
          .on("end", function() {
            // Draw rest of ray
            let secondary_path = [primary_path[1], intersect_path[1]];
            var draw_path2 = rays
              .append("path")
              .attr("d", line(secondary_path))
              .attr("stroke", "steelblue")
              .attr("stroke-width", "2")
              .attr("fill", "none");
            totalLength = draw_path2.node().getTotalLength();
            draw_path2
              .attr("stroke-dasharray", totalLength + " " + totalLength)
              .attr("stroke-dashoffset", totalLength)
              .transition()
              .duration(70)
              .delay(0)
              .ease(d3.easeLinear)
              .attr("stroke-dashoffset", 0)
              .transition()
              .attr('stroke', box_toggles.sphere_col)
              .duration(0)
              .delay(0)
              .on("end", () => {
                let intersection = create_ray_intersections(
                  rays,
                  Object.values(intersect_path[0]),
                  Object.values(intersect_path[1])
                );
                // Draw intersection circles
                intersection
                  .attr("cx", intersect_path[1].x)
                  .attr("cy", intersect_path[1].y);

                // Draw specular reflection
                if (ray_toggles2.reflection == 'specular') {
                  var spec = rays
                    .append("path")
                    .attr("d", line(reflect_path))
                    .attr("stroke", box_toggles.sphere_col)
                    .attr("stroke-width", "2")
                    .attr("fill", "none");
                  totalLength = spec.node().getTotalLength();
                  spec
                    .attr("stroke-dasharray", totalLength + " " + totalLength)
                    .attr("stroke-dashoffset", totalLength)
                    .transition()
                    .duration(500)
                    .ease(d3.easeLinear)
                    .attr("stroke-dashoffset", 0);
                }

                // Draw diffuse reflection
                else if (ray_toggles2.reflection == 'diffuse') {
                  const circleNormal = [
                    circleCenterX - reflect_path[0].x,
                    circleCenterY - reflect_path[0].y
                  ];
                  createDiffuse(reflect_path, rays, circleNormal);
                }

                // Draw refracted rays
                if (ray_toggles2.mat == 'glass') {
                  var refractedPath = rays
                    .append("path")
                    .attr("d", line(refract_path))
                    .attr("stroke", box_toggles.sphere_col)
                    .attr("stroke-width", "2")
                    .attr("fill", "none");
                  totalLength = refractedPath.node().getTotalLength();
                  refractedPath
                    .attr("stroke-dasharray", totalLength + " " + totalLength)
                    .attr("stroke-dashoffset", totalLength)
                    .transition()
                    .duration(500)
                    .ease(d3.easeLinear)
                    .attr("stroke-dashoffset", 0)
                    .on("end", () => {
                        var refractedAgainPath = rays
                        .append("path")
                        .attr("d", line(refract_path2))
                        .attr("stroke", box_toggles.sphere_col)
                        .attr("stroke-width", "2")
                        .attr("fill", "none");
                        totalLength = refractedAgainPath.node().getTotalLength();
                        refractedAgainPath
                          .attr("stroke-dasharray", totalLength + " " + totalLength)
                          .attr("stroke-dashoffset", totalLength)
                          .transition()
                          .duration(500)
                          .ease(d3.easeLinear)
                          .attr("stroke-dashoffset", 0)
                          .on("end", () => {
                              let intersection = create_ray_intersections(
                                rays,
                                Object.values(refract_path2[0]),
                                Object.values(refract_path2[1])
                              );
                              // Draw intersection circles
                              intersection
                                .attr("cx", refract_path2[1].x)
                                .attr("cy", refract_path2[1].y);
                        })

                })
                }

                // Draw shadow rays
                if (ray_toggles2.shadow_select == 'on') {
                  let shadowPoints = calculateShadowRay(
                    [reflect_path[0].x, reflect_path[0].y],
                    true
                  );
                  if (shadowPoints[0].x != -100000) {
                    var shadow = rays
                      .append("path")
                      .attr("d", line(shadowPoints))
                      .attr("stroke", box_toggles.sphere_col)
                      .attr("stroke-width", "2")
                      .attr("fill", "none");
                    totalLength = shadow.node().getTotalLength();
                    shadow
                      .attr("stroke-dasharray", totalLength + " " + totalLength)
                      .attr("stroke-dashoffset", totalLength)
                      .transition()
                      .duration(500)
                      .ease(d3.easeLinear)
                      .attr("stroke-dashoffset", 0)
                      .transition()
                      .attr(
                        'stroke',
                        shadowPoints[1].y < 150 ? "#FFF700" : "#474747"
                      )
                      .duration(0)
                      .delay(0)
                      .on("end", () => {
                        let intersection = create_ray_intersections(
                          rays,
                          Object.values(shadowPoints[0]),
                          Object.values(shadowPoints[1])
                        );
                        // Draw intersection circles
                        intersection
                          .attr("cx", shadowPoints[1].x)
                          .attr("cy", shadowPoints[1].y);
                      });
                  }
                }
              });
          })
          .transition()
          .attr('stroke', box_toggles.sphere_col)
          .duration(0)
          .delay(80);
      }

      // handle rays that don't intersect the sphere
      else {
        min_x = min_x > 1000 ? 700 : min_x;
        let primary_path = path.slice();
        let t = 1 - (primary_path[1].x - min_x + 42) / primary_path[1].x;
        let interpolated_point = interpolate(
          [primary_path[0].x, primary_path[0].y],
          [primary_path[1].x, primary_path[1].y],
          t
        );
        primary_path[1] = {
          x: interpolated_point[0],
          y: interpolated_point[1]
        };
        let draw_path = rays
          .append("path")
          .attr("d", line(primary_path))
          .attr("stroke", "steelblue")
          .attr("stroke-width", "2")
          .attr("fill", "none");
        var totalLength = draw_path.node().getTotalLength();
        let secondary_path = [primary_path[1], path[1]];
        let o = adjustedIntersection(Object.values(secondary_path[0]), Object.values(secondary_path[1]), occluderRadius, [occluderCenterX ,occluderCenterY]);
        //console.log(o);
        let floor_intersection = floorIntersection(secondary_path);
        let wall_intersection = wallIntersection(secondary_path);
        let occluder_intersection = [secondary_path[0],{x:o[0], y:o[1]}];
        if (occluder_toggles.enable_occluder == 'on' && o[0] != -100000)
        {
          draw_path
            .attr("stroke-dasharray", totalLength + " " + totalLength)
            .attr("stroke-dashoffset", totalLength)
            .transition()
            .duration(1500)
            .ease(d3.easeLinear)
            .attr("stroke-dashoffset", 0)
            .on("end", () => {
              let draw_path2 = rays
                .append("path")
                .attr("d",line(occluder_intersection))
                //.attr("d",line(floor_intersection[1].x != -100000 ? floor_intersection : secondary_path))
                .attr("stroke", "steelblue")
                .attr("stroke-width", "2")
                .attr("fill", "none")
             //   .transition()
              //  .delay(70)
               // .duration(0)
               // .attr("stroke",occluder_toggles.occluder_col) ;
            
            totalLength = draw_path2.node().getTotalLength();
              draw_path2
                .attr("stroke-dasharray", totalLength + " " + totalLength)
                .attr("stroke-dashoffset", totalLength)
                .transition()
                .delay(0)
                //.duration(1100)
                .duration(600)
 
                .ease(d3.easeLinear)
                .attr("stroke-dashoffset", 0)
                .transition()
                //.delay(60)
                .duration(0)
                .attr("stroke",occluder_toggles.occluder_col)
                .on("end", () => {
                  let intersection = create_ray_intersections(
                    rays,
                    Object.values(occluder_intersection[0]),
                    Object.values(occluder_intersection[1])
                  );
                  intersection
                    .attr("cx", occluder_intersection[1].x)
                    .attr("cy", occluder_intersection[1].y);
                
                  if (ray_toggles2.shadow_select == 'on' && o[0] != -100000)
                  {
                    
                    
                    let sphere_intersect =
                        adjustedIntersection2_electric_boogalo(Object.values(occluder_intersection[1]), [circleCenterX,
                                                                                                         circleCenterY],
                                                                                                          sphere_radius, [circleCenterX-20,
                                                                                                         circleCenterY-20]);
                    let sphere_path = [occluder_intersection[1], {x:sphere_intersect[0], y:sphere_intersect[1]}];
                    //let shadow_path = calculateShadowRay(sphere_path, false);
                    //console.log(shadow_path);
                    
                    let draw_sphere_path = rays
                      .append("path")
                      .attr("d", line(sphere_path))
                      .attr("stroke", occluder_toggles.occluder_col)
                      .attr("stroke-width", "2")
                      .attr("fill", "none");
                    totalLength = draw_sphere_path.node().getTotalLength();
                    draw_sphere_path
                      .attr("stroke-dasharray", totalLength + " " + totalLength)
                      .attr("stroke-dashoffset", totalLength)
                      .transition()
                      .duration(500)
                      .ease(d3.easeLinear)
                      .attr("stroke-dashoffset", 0)
                      .transition()
                      .attr('stroke', box_toggles.sphere_col)
                      .delay(0)
                      .duration(0).on("end", () =>{
                        intersection = create_ray_intersections(
                          rays,
                          Object.values(sphere_path[0]),
                          Object.values(sphere_path[1])
                        );
                        intersection
                          .attr("cx", sphere_path[1].x)
                          .attr("cy", sphere_path[1].y);  
                      
                        let shadow = adjustedIntersection2_electric_boogalo(Object.values(sphere_path[1]), light_coordinates, 20, light_coordinates);
                        let draw_shadow_path = rays
                          .append("path")
                          .attr("d", line(
                            [sphere_path[1],{x:shadow[0], y:shadow[1]}]
                          ))
                          .attr("stroke", occluder_toggles.occluder_col)
                          .attr("stroke-width", "2")
                          .attr("fill", "none");
                        totalLength = draw_shadow_path.node().getTotalLength();
                        draw_shadow_path
                          .attr("stroke-dasharray", totalLength + " " + totalLength)
                          .attr("stroke-dashoffset", totalLength)
                          .transition()
                          .duration(700)
                          .ease(d3.easeLinear)
                          .attr("stroke-dashoffset", 0)
                          .transition()
                          .attr('stroke', "#FFF700")
                          .delay(0)
                          .duration(0).on("end", () => {
                            intersection = create_ray_intersections(
                              rays,
                              Object.values(sphere_path[1]),
                              [shadow[0], shadow[1]]
                            );
                            intersection
                              .attr("cx", shadow[0])
                              .attr("cy", shadow[1]); 
                            })
                      })
                  
                  //let o = adjustedIntersection(Object.values(secondary_path[0]), Object.values(secondary_path[1]), occluderRadius, [occluderCenterX ,occluderCenterY]);
                  }
                });
        }).transition().delay(600).duration(0).attr("stroke",occluder_toggles.occluder_col);
        }
        else
        {
          draw_path
            .attr("stroke-dasharray", totalLength + " " + totalLength)
            .attr("stroke-dashoffset", totalLength)
            .transition()
            .duration(1500)
            .ease(d3.easeLinear)
            .attr("stroke-dashoffset", 0)
            .on("end", () => {
              let draw_path2 = rays
                .append("path")
                .attr(
                  "d",
                  line(
                     floor_intersection[1].x != -100000
                      ? floor_intersection
                      : wall_intersection[1].x != -100000
                      ? wall_intersection
                      : secondary_path
                  )
                )
                //.attr("d",line(floor_intersection[1].x != -100000 ? floor_intersection : secondary_path))
                .attr("stroke", "steelblue")
                .attr("stroke-width", "2")
                .attr("fill", "none");
              totalLength = draw_path2.node().getTotalLength();
              draw_path2
                .attr("stroke-dasharray", totalLength + " " + totalLength)
                .attr("stroke-dashoffset", totalLength)
                .transition()
                .delay(0)
                //.duration(1100)
                .duration(
                  floor_intersection[1].x != -100000
                    ? 500
                    : wall_intersection[1].x != -100000
                    ? 700
                    : 1100
                )
                //  .duration(floor_intersection[1].x != -100000 || wall_intersection[1].x != -100000 ? min_x != 600 ? 500 : 1100 : 1100)
                .ease(d3.easeLinear)
                .attr("stroke-dashoffset", 0)
                .transition()
                .delay(0)
                .duration(0)
                .attr(
                  "stroke",
                  floor_intersection[1].x != -100000 ||
                    wall_intersection[1].x != -100000
                    ? box_toggles.box_col
                    : "steelblue"
                );
            })
            .transition()
            .attr(
              "stroke",
              floor_intersection[1].x != -100000 ||
                wall_intersection[1].x != -100000
                ? box_toggles.box_col
                : "steelblue"
            )
            .delay(floor_intersection[1].x != -100000 ? 500 : 700)
            .duration(0)
            .on("end", () => {
              if (floor_intersection[1].x != -100000) {
                let intersection = create_ray_intersections(
                  rays,
                  Object.values(floor_intersection[0]),
                  Object.values(floor_intersection[1])
                );
                intersection
                  .attr("cx", floor_intersection[1].x)
                  .attr("cy", floor_intersection[1].y);

                let shadowPoints = calculateShadowRay(
                  [floor_intersection[1].x, floor_intersection[1].y],
                  false
                );
                if (
                  shadowPoints[0].x != -100000 &&
                  ray_toggles2.shadow_select == 'on'
                ) {
                  var shadow = rays
                    .append("path")
                    .attr("d", line(shadowPoints))
                    .attr("stroke", box_toggles.sphere_col)
                    .attr("stroke-width", "2")
                    .attr("fill", "none");
                  totalLength = shadow.node().getTotalLength();
                  shadow
                    .attr("stroke-dasharray", totalLength + " " + totalLength)
                    .attr("stroke-dashoffset", totalLength)
                    .transition()
                    .duration(500)
                    .ease(d3.easeLinear)
                    .attr("stroke-dashoffset", 0)
                    .transition()
                    .attr(
                      'stroke',
                      shadowPoints[1].y < 150 ? "#FFF700" : "#474747"
                    )
                    .duration(0)
                    .delay(0)
                    .on("end", () => {
                      let intersection = create_ray_intersections(
                        rays,
                        Object.values(shadowPoints[0]),
                        Object.values(shadowPoints[1])
                      );
                      // Draw intersection circles
                      intersection
                        .attr("cx", shadowPoints[1].x)
                        .attr("cy", shadowPoints[1].y);
                    });
                }
              } else if (wall_intersection[1].x != -100000) {
                if (deez) console.log("nutz");
                let intersection = create_ray_intersections(
                  rays,
                  Object.values(wall_intersection[0]),
                  Object.values(wall_intersection[1])
                );
                intersection
                  .attr("cx", wall_intersection[1].x)
                  .attr("cy", wall_intersection[1].y);

                let shadowPoints = calculateShadowRay(
                  [wall_intersection[1].x, wall_intersection[1].y],
                  false
                );
                if (
                  shadowPoints[0].x != -100000 &&
                  ray_toggles2.shadow_select == 'on'
                ) {
                  var shadow = rays
                    .append("path")
                    .attr("d", line(shadowPoints))
                    .attr("stroke", box_toggles.sphere_col)
                    .attr("stroke-width", "2")
                    .attr("fill", "none");
                  totalLength = shadow.node().getTotalLength();
                  shadow
                    .attr("stroke-dasharray", totalLength + " " + totalLength)
                    .attr("stroke-dashoffset", totalLength)
                    .transition()
                    .duration(500)
                    .ease(d3.easeLinear)
                    .attr("stroke-dashoffset", 0)
                    .transition()
                    .attr(
                      'stroke',
                      shadowPoints[1].y < 150 ? "#FFF700" : "#474747"
                    )
                    .duration(0)
                    .delay(0)
                    .on("end", () => {
                      let intersection = create_ray_intersections(
                        rays,
                        Object.values(shadowPoints[0]),
                        Object.values(shadowPoints[1])
                      );
                      // Draw intersection circles
                      intersection
                        .attr("cx", shadowPoints[1].x)
                        .attr("cy", shadowPoints[1].y);
                    });
                }
              }
            });
          }
      }
    });
  } else d3.selectAll('#rays_container').remove();
}
);
  main.variable(observer()).define(["md"], function(md){return(
md `## Animation Functions`
)});
  main.variable(observer("create_line_N")).define("create_line_N", ["line","d3"], function(line,d3){return(
function create_line_N(rays, points, col = 'white') {//just to help control line length
  let y = (points[0].y-points[1].y);
  let x = (points[0].x-points[1].x);
 // console.log(x);
  let dis = Math.sqrt(Math.pow((points[1].x - points[0].x), 2) + Math.pow((points[1].y - points[0].y), 2));
  points[1].x = points[0].x - x/dis*50;//change these hard coded numbers to change length
  points[1].y = points[0].y - y/dis*50;
  var diffusePath = rays.append("path")
    .attr("d", line(points))
    .attr("stroke", "white")
    .attr("stroke-width", "1.5")
    .attr("fill", "none");
  var totalLength = diffusePath.node().getTotalLength();
  diffusePath
    .attr("stroke-dasharray",totalLength + " " + totalLength)
    .attr("stroke-dashoffset", totalLength)
    .transition()
    .duration(500)
    .ease(d3.easeLinear)
    .attr("stroke-dashoffset", 0)
  //return svg.append('g').append('path').attr('fill', 'none').attr('stroke', col).attr('stroke-width', 1.5).attr('d', //line(points));
}
)});
  main.variable(observer("create_reflected_rays_container")).define("create_reflected_rays_container", function(){return(
function create_reflected_rays_container(svg) {
  return svg
    .select('#reflected_rays_container')
    .append('g')
    .attr('id', 'rays');
}
)});
  main.variable(observer("create_rays_container")).define("create_rays_container", function(){return(
function create_rays_container(svg) {
  return svg.select('#rays_container').append('g').attr('id', 'rays');
}
)});
  main.variable(observer("create_line_R")).define("create_line_R", ["line"], function(line){return(
function create_line_R(svg, points, col = 'red') {
  return svg.append('g').append('path').attr('fill', 'none').attr('stroke', col).attr('stroke-width', 1.5).attr('d', line(points));
}
)});
  main.variable(observer("create_line")).define("create_line", ["line"], function(line){return(
function create_line(svg, points, color='steelblue') {
  return svg.append('g').append('path').attr('fill', 'none').attr('stroke', color).attr('stroke-width', 1.5).attr('d', line(points));
}
)});
  main.variable(observer("create_rect")).define("create_rect", function(){return(
function create_rect(svg, x, y, width, height, col='#69a3b2') {
  return svg.append('g').append('rect').attr('x',x).attr('y',y).attr('width', width).attr('height', height).attr('fill',col);
}
)});
  main.variable(observer("create_text")).define("create_text", function(){return(
function create_text(svg, x, y, text) {
  svg.append('g').append('text').attr('x', x).attr('y', y).attr('fill', '#fff').attr('font-size', '16px').attr('text-anchor', 'middle').text(text);
}
)});
  main.variable(observer("create_ray_intersections")).define("create_ray_intersections", ["intersection_size"], function(intersection_size){return(
function create_ray_intersections(svg, p1,p2) {
  return svg.append("g")
    .selectAll("circle")
    .data([p1,p2])
    .enter().append("circle")
      .attr("r", intersection_size)
      .attr("stroke", "white")
     .attr("stroke-width", 2)
      .attr("fill", "none");
}
)});
  main.variable(observer("create_circle")).define("create_circle", function(){return(
function create_circle(svg, x, y, r, color="#fff", fill="none") {
  svg.append('g').append('circle').attr('cx', x).attr('cy', y).attr('r', r).attr("stroke", color)
     .attr("stroke-width", 2)
     .attr("fill", fill);
}
)});
  main.variable(observer()).define(["md"], function(md){return(
md `## Animation Constants`
)});
  main.variable(observer("intersection_size")).define("intersection_size", function(){return(
5
)});
  main.variable(observer("light_coordinates")).define("light_coordinates", ["width","height"], function(width,height){return(
[width/2-150, height/7.]
)});
  main.variable(observer("num_rays")).define("num_rays", ["ray_toggles"], function(ray_toggles){return(
ray_toggles.num_rays_slider
)});
  main.variable(observer("circleCenterY")).define("circleCenterY", ["height"], function(height){return(
(1/2)*height
)});
  main.variable(observer("circleCenterX")).define("circleCenterX", ["width"], function(width){return(
(7/10)*width
)});
  main.variable(observer("occluderRadius")).define("occluderRadius", function(){return(
30
)});
  main.variable(observer("occluderCenterY")).define("occluderCenterY", function(){return(
200
)});
  main.variable(observer("occluderCenterX")).define("occluderCenterX", function(){return(
900
)});
  main.variable(observer("width")).define("width", function(){return(
1100
)});
  main.variable(observer("height")).define("height", function(){return(
718
)});
  main.variable(observer("lens_y_max")).define("lens_y_max", ["height"], function(height){return(
(5/8)*height
)});
  main.variable(observer("lens_y_min")).define("lens_y_min", ["height"], function(height){return(
(3/8)*height
)});
  main.variable(observer("lens_x")).define("lens_x", ["width"], function(width){return(
(5/20)*width
)});
  main.variable(observer("eye")).define("eye", ["width","height"], function(width,height)
{
  return {x: (1/10)*width, y: (1/2)*height};
}
);
  main.variable(observer("ray_lens_intersect")).define("ray_lens_intersect", ["lens_y_max","lens_y_min","num_rays","lens_x","eye"], function(lens_y_max,lens_y_min,num_rays,lens_x,eye)
{
  let ray_lens_intersect = [];
  let step = (lens_y_max - lens_y_min) / (num_rays - 1);
  for (let i = 0; i < num_rays; i++) {
    let x = lens_x
    let y = lens_y_min + i * step;
    let slope = (y - eye.y) / (x - eye.x);
    ray_lens_intersect[i] = {x: x, y: y, slope: slope};
  }
  return ray_lens_intersect;
}
);
  main.variable(observer("line")).define("line", ["d3"], function(d3){return(
d3.line().x(d => d.x).y(d => d.y)
)});
  main.variable(observer()).define(["md"], function(md){return(
md `## Utility Functions`
)});
  main.variable(observer("mat4")).define("mat4", ["glMatrix"], function(glMatrix){return(
glMatrix.mat4
)});
  main.variable(observer("vec3")).define("vec3", ["glMatrix"], function(glMatrix){return(
glMatrix.vec3
)});
  main.variable(observer("image_from_URL")).define("image_from_URL", function(){return(
url => {
  return new Promise(resolve => {
    const im = new Image();
    im.crossOrigin = "anonymous";
    im.src = url;
    im.onload = () => resolve(im);
  });
}
)});
  main.variable(observer("mkcolor")).define("mkcolor", function(){return(
function mkcolor(str) {
  return [parseInt(str[1] + str[2], 16) / 255, parseInt(str[3] + str[4], 16) / 255, parseInt(str[5] + str[6], 16) / 255]
}
)});
  main.variable(observer("calculateShadowRay")).define("calculateShadowRay", ["occluderIntersection","light_coordinates","occluderRadius","occluderCenterX","occluderCenterY","adjustedIntersection2_electric_boogalo","sphere_radius","circleCenterX","circleCenterY","occluder_toggles"], function(occluderIntersection,light_coordinates,occluderRadius,occluderCenterX,occluderCenterY,adjustedIntersection2_electric_boogalo,sphere_radius,circleCenterX,circleCenterY,occluder_toggles){return(
function calculateShadowRay(points, ignoreSphere) {
  // points is a 2d array of xy coordinates

  let occluder_intersect = occluderIntersection(
    points,
    [light_coordinates[0], light_coordinates[1]],
    occluderRadius,
    [occluderCenterX, occluderCenterY]
  );

  let sphere_intersect = adjustedIntersection2_electric_boogalo(
    points,
    [light_coordinates[0], light_coordinates[1]],
    sphere_radius,
    [circleCenterX, circleCenterY]
  );

  if (sphere_intersect[0] != -100000 && !ignoreSphere)
    return [
      { x: points[0], y: points[1] },
      { x: sphere_intersect[0], y: sphere_intersect[1] }
    ];
  else if (
    occluder_toggles.enable_occluder == 'on' &&
    occluder_intersect[0] != -100000
  )
    return [
      { x: points[0], y: points[1] },
      { x: occluder_intersect[0], y: occluder_intersect[1] }
    ];
  else {
    let light_intersect = occluderIntersection(
      points,
      [light_coordinates[0], light_coordinates[1]],
      20,
      [light_coordinates[0], light_coordinates[1]]
    );
    return [
      { x: points[0], y: points[1] },
      { x: light_intersect[0], y: light_intersect[1] }
    ];
  }
}
)});
  main.variable(observer("floorIntersection")).define("floorIntersection", ["height","width"], function(height,width){return(
function floorIntersection(points) {
  let floor_path = points.slice();
  // h
  //points found using determinants
  let px = ((points[0].x*points[1].y-points[0].y*points[1].x)*(150-200)-(points[0].x-points[1].x)*(150*(height-20)-(height-20)*200))/(-(points[0].y-points[1].y)*(150-200));
//  let py = ((points[0].x*points[1].y-points[0].y*points[1].x)*(150-200)-(points[0].y-points[1].y)*((width-150)*200-150*(width-150)))/((points[0].x-points[1].x)*(150-200));
  
  if (px >= 0 && px <= width-150)
    floor_path[1] = {x:px, y:height-20};
  else
    floor_path[1]={x:-100000, y:-100000}
 // console.log("floor");
 // console.log(floor_path);
  return floor_path;
}
)});
  main.variable(observer("wallIntersection")).define("wallIntersection", ["width","height"], function(width,height){return(
function wallIntersection(points) {
  let wall_path = points.slice();
  //points found using determinants
  let px = (-(points[0].x-points[1].x)*((width-150)*200-150*(width-150))/((points[0].x-points[1].x)*(150-200)));
  // Don't actually need py
  let py = ((points[0].x*points[1].y-points[0].y*points[1].x)*(150-200)-(points[0].y-points[1].y)*((width-150)*200-150*(width-150)))/((points[0].x-points[1].x)*(150-200));
  
  if (py >=0 && py <= height - 20)
    wall_path[1] = {x:px, y:py};
  else
    wall_path[1]={x:-100000, y:-100000}
  
 // console.log("wall");
 // console.log(wall_path);
  return wall_path;
}
)});
  main.variable(observer("reflect")).define("reflect", function(){return(
function reflect(I, N) {
  let Imag = Math.sqrt(Math.pow(I[0], 2) + Math.pow(I[1], 2));
  let Nmag = Math.sqrt(Math.pow(N[0], 2) + Math.pow(N[1], 2));
  
  let Ihat = [I[0] / Imag, I[1] / Imag];
  let Nhat = [N[0] / Nmag, N[1] / Nmag];
  // console.log(Ihat, Nhat);
  let dotProduct = (Nhat[0] * Ihat[0]) + (Nhat[1] * Ihat[1]);
  // console.log(dotProduct);
  let reflected = [2 * dotProduct * Nhat[0], 2 * dotProduct * Nhat[1]];
  console.log(Ihat[1] - reflected[1]);
  return [Ihat[0] - reflected[0], Ihat[1] - reflected[1]];
}
)});
  main.variable(observer("refract")).define("refract", function(){return(
function refract(u, n, etas) {
  const uvLength = Math.sqrt(Math.pow((u[0]), 2) + Math.pow((u[1]), 2));
  const nLength = Math.sqrt(Math.pow((n[0]), 2) + Math.pow((n[1]), 2));
  let uv = [u[0], u[1]];  //pointless?
  let nv = [n[0], n[1]];
  uv[0] = uv[0]/uvLength; //normalizing
  uv[1] = uv[1]/uvLength;
  nv[0] = nv[0]/nLength;
  nv[1] = nv[1]/nLength;
  const cos_theta = -1 * (uv[0]*nv[0]) + (uv[1]*nv[1]);  //dot product
  //etai_over_etat * (uv + cos_theta*n);
  nv[0] = cos_theta * nv[0];  
  nv[1] = cos_theta * nv[1];
  uv[0] = etas * (nv[0] + uv[0]);
  uv[1] = etas * (nv[1] + uv[1]);
  //-sqrt(fabs(1.0 - r_out_perp.length_squared())) * n;
  const r_out_perp_length = Math.sqrt(Math.pow((uv[0]), 2) + Math.pow((uv[1]), 2)); 
  const temp = -1 * Math.sqrt(Math.abs(1 - Math.pow(r_out_perp_length, 2)));
  nv[0] = temp * nv[0];
  nv[1] = temp * nv[1];
  uv[0] = uv[0] + nv[0];
  uv[1] = uv[1] + nv[1];
  return uv;
}
)});
  main.variable(observer("refract2")).define("refract2", function(){return(
function refract2(u, n, etas) {
  const uvLength = Math.sqrt(Math.pow((u[0]), 2) + Math.pow((u[1]), 2));
  const nLength = Math.sqrt(Math.pow((n[0]), 2) + Math.pow((n[1]), 2));
  let uv = [u[0], u[1]];  //pointless?
  let nv = [n[0], n[1]];
  uv[0] = uv[0]/uvLength; //normalizing
  uv[1] = uv[1]/uvLength;
  nv[0] = nv[0]/nLength;
  nv[1] = nv[1]/nLength;
  const cos_theta = -1 * (uv[0]*nv[0]) + (uv[1]*nv[1]) - 2*Math.PI;  //dot product------ADDED PI
  //etai_over_etat * (uv + cos_theta*n);
  nv[0] = cos_theta * nv[0];  
  nv[1] = cos_theta * nv[1];
  uv[0] = etas * (nv[0] + uv[0]);
  uv[1] = etas * (nv[1] + uv[1]);
  //-sqrt(fabs(1.0 - r_out_perp.length_squared())) * n;
  const r_out_perp_length = Math.sqrt(Math.pow((uv[0]), 2) + Math.pow((uv[1]), 2)); 
  const temp = -1 * Math.sqrt(Math.abs(1 - Math.pow(r_out_perp_length, 2)));
  nv[0] = temp * nv[0];
  nv[1] = temp * nv[1];
  uv[0] = uv[0] + nv[0];
  uv[1] = uv[1] + nv[1];
  return uv;
}
)});
  main.variable(observer("createDiffuse")).define("createDiffuse", ["geometric","create_line_N"], function(geometric,create_line_N){return(
function createDiffuse(points, reflected_rays_container, normal){
    //remember diffuse carries its color with it to its next intersection, dont know if we'll do this
    let theta = [-90, -105, -120, -135, -150, -165, 180, 165, 150, 135, 120, 105, 90];
    //let theta = [-30, -25, -20, -15, -10, -5, 5, 10, 15, 20, 25, 30];
    //let theta = [5, 10 , 15, -5, -10, -15];
   
    points[1].x = normal[0]* 1.2;
    points[1].y = normal[1]* 1.2;
   
    //points[0] is intersection point, normal is vector
    //points[1] change to point on normals path out of circle
    let x = points[1].x;
    let y = points[1].y;
    let r = 0;
    //rotations
    for(let i=0;i<12;i++)
    {
      //console.log(points);
      r = geometric.angleToRadians(theta[i]);
      points[1].x = Math.cos(r)*x - Math.sin(r)*y;
      points[1].y = Math.sin(r)*x + Math.cos(r)*y;
      points[1].x = points[1].x + points[0].x;// add this back cuz rotation assumes around (0,0)
      points[1].y = points[1].y + points[0].y;
      create_line_N(reflected_rays_container, points, 'white');
      //console.log(points);
    }
  
}
)});
  main.variable(observer("intersect")).define("intersect", function(){return(
function intersect([x1, y1], [x2, y2], r) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const dr = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
  const D = x1 * y2 - x2 * y1;
  // Add fallback of -10000000 incase thing1 evaluates to NaN
  const thing1 = Math.sqrt(Math.pow(r, 2) * Math.pow(dr, 2) - Math.pow(D, 2));
  
  const sgn = dy < 0 ? -1 : 1; 
  const x = [
    (D * dy + sgn * dx * thing1) / Math.pow(dr, 2),
    (D * dy - sgn * dx * thing1) / Math.pow(dr, 2)
  ];
  
  const y = [
    (-D * dx + Math.abs(dy) * thing1) / Math.pow(dr, 2),
    (-D * dx - Math.abs(dy) * thing1) / Math.pow(dr, 2)
  ];
  
  const discriminant = Math.pow(r, 2) * Math.pow(dr, 2) - Math.pow(D, 2);
  const numberIntersections = discriminant === 0 ? 1 : discriminant > 0 ? 2 : 0;

  return [[x[0], y[0]], [x[1], y[1]]];
}
)});
  main.variable(observer("occluderIntersection")).define("occluderIntersection", ["intersect"], function(intersect){return(
function occluderIntersection(p1,p2,r,center) {
  const [p3, p4] = intersect(
    [p1[0] - center[0], p1[1] - center[1]], 
    [p2[0] - center[0], p2[1] - center[1]], 
    r
  );
  if (isNaN(p3[0])) {
  	//console.log(p3[0])
    return [-100000, -100000];
    
  }
  var p = []
  if (p3[0] > p4[0])
    p = [p3[0] + center[0], p3[1] + center[1]];
  else
    p = [p4[0] + center[0], p4[1] + center[1]];
  //return [p3a, p4a];
  return p;
  
  
}
)});
  main.variable(observer("adjustedIntersection2_electric_boogalo")).define("adjustedIntersection2_electric_boogalo", ["intersect"], function(intersect){return(
function adjustedIntersection2_electric_boogalo(p1, p2, r, center) {
  const [p3, p4] = intersect(
    [p1[0] - center[0], p1[1] - center[1]], 
    [p2[0] - center[0], p2[1] - center[1]], 
    r
  );
  if (isNaN(p3[0])) {
  	//console.log(p3[0])
    return [-100000, -100000];
    
  }
  
 // const p3a = [p3[0] + center[0], p3[1] + center[1]];
 // const p4a = [p4[0] + center[0], p4[1] + center[1]];
  var p = []
  if (p3[0] > p4[0])
    p = [p3[0] + center[0], p3[1] + center[1]];
  else
    p = [p4[0] + center[0], p4[1] + center[1]];
  //return [p3a, p4a];
  return p;
}
)});
  main.variable(observer("adjustedIntersection")).define("adjustedIntersection", ["intersect"], function(intersect){return(
function adjustedIntersection(p1, p2, r, center) {
  const [p3, p4] = intersect(
    [p1[0] - center[0], p1[1] - center[1]], 
    [p2[0] - center[0], p2[1] - center[1]], 
    r
  );
  if (isNaN(p3[0])) {
  	//console.log(p3[0])
    return [-100000, -100000];
    
  }
  
 // const p3a = [p3[0] + center[0], p3[1] + center[1]];
 // const p4a = [p4[0] + center[0], p4[1] + center[1]];
  var p = []
  if (p3[0] < p4[0])
    p = [p3[0] + center[0], p3[1] + center[1]];
  else
    p = [p4[0] + center[0], p4[1] + center[1]];
  //return [p3a, p4a];
  return p;
}
)});
  main.variable(observer("interpolate")).define("interpolate", function(){return(
function interpolate([x1, y1], [x2, y2], t) {
  return [x1 + (x2 - x1) * t, y1 + (y2 - y1) * t];
}
)});
  main.variable(observer("distance")).define("distance", function(){return(
function distance([x1, y1], [x2, y2]) {
  return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
}
)});
  main.variable(observer("calculatePath")).define("calculatePath", ["eye","adjustedIntersection","sphere_radius","circleCenterX","circleCenterY","reflect","interpolate","refract","adjustedIntersection2_electric_boogalo","refract2","width"], function(eye,adjustedIntersection,sphere_radius,circleCenterX,circleCenterY,reflect,interpolate,refract,adjustedIntersection2_electric_boogalo,refract2,width){return(
function calculatePath(ray, x_offset, index) {
        let x = eye.x + x_offset;
        let y = eye.y + (ray.slope * x_offset);
        let points = [];
        points.push({x: eye.x, y: eye.y});
       // console.log(points);
        if (ray.x < x) points.push({x: x, y: y});
        else points.push({x: ray.x, y: ray.y});
       // console.log(points);
        const p = adjustedIntersection(Object.values(points[0]), Object.values(points[1]), sphere_radius, [circleCenterX ,circleCenterY]);
       // const o = adjustedIntersection(Object.values(points[0]), Object.values(points[1]), occluderRadius, [occluderCenterX ,occluderCenterY]);
       // console.log(p)
        if (p[0] != -100000 && p[1] != -100000 && points[1].x >= p[0])
          points[1] = ({x:p[0], y:p[1]});
        else
        {
          //console.log("here");
          p[0] = p[1] = -100000;
        }
  
        // Check for sphere intersection
        if (p[0] != -100000 && p[1] != -100000) {
          const eps = 1e-10; // Epsilon value to be used with the calculated slope
          
          // Normal vector of the circle intersection, in relation to the eye object
          const circleNormal = [circleCenterX - p[0], circleCenterY - p[1]]; 
          // console.log(circleNormal);
          // console.log([x - eye.x, y - eye.y]);
          
          // Calculates the vector of the reflected ray
          const reflectedRay = reflect([x - eye.x, y - eye.y], circleNormal);
        //  console.log("Reflected Ray: ", reflectedRay);
          
          // Divide-by-zero sanity check
          const reflectedSlope = (reflectedRay[0] < eps && reflectedRay[0] > -eps) ? 0 : reflectedRay[1] / reflectedRay[0];
          //console.log("Slope: ", reflectedSlope);
          
          // Draws the reflected line based if the reflection ray is +x (reflection towards the right), or -x (reflecting towards the left). (100 is hardcoded)
          let reflectedX = p[0] + (reflectedRay[0] > 0 ? sphere_radius : -sphere_radius);
          let reflectedY = p[1] + (reflectedRay[0] > 0 ? reflectedSlope * sphere_radius : -reflectedSlope * sphere_radius);
          console.log(reflectedY);
          if (Math.abs(p[1] - reflectedY) > 200)
          {
             let t = 200 / Math.abs(reflectedY - p[1]) 
             let point = interpolate(p, [reflectedX, reflectedY], t)
             points.push({x:point[0], y:point[1]});
          }
          else
            points.push({x: reflectedX, y: reflectedY});
          
          let reflectedPoints = [];
          reflectedPoints.push({x: p[0], y: p[1]});//path[1]
          reflectedPoints.push({x: reflectedX, y: reflectedY});//path[2]
          
         // let reflectedLine = create_line(reflected_rays_container, reflectedPoints);
          
          //refraction start
          let refracted = refract([x - eye.x, y - eye.y], circleNormal, index); //change 1.5 maybe, 1.5 is refraction for glass
          const p2 = adjustedIntersection2_electric_boogalo(p, [p[0] + refracted[0], p[1] - refracted[1]], sphere_radius, [circleCenterX ,circleCenterY]);
          points.push({x: p2[0], y: p2[1]});//path[3]
          refracted = refract2([p[0], p[1]], circleNormal, 1/index);
          let m = refracted[1]/refracted[0];
          let yy = ((width-150)-p2[0])*m + p2[1];
          points.push({x: width-150, y: yy}); //path[4]
    }
   // else if (o[0] != -100000 && occluder_toggles.enable_occluder == 'on')
    //  points[1] = ({x:o[0], y:o[1]})
      
    
    return points;
  
}
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## External Libraries and Functions`
)});
  main.variable(observer("d3")).define("d3", ["require"], function(require){return(
require('d3@6')
)});
  const child1 = runtime.module(define1);
  main.import("slider", child1);
  main.import("checkbox", child1);
  main.import("select", child1);
  main.import("color", child1);
  main.import("radio", child1);
  main.import("button", child1);
  const child2 = runtime.module(define2);
  main.import("columns", child2);
  const child3 = runtime.module(define3);
  main.import("mutableForm", child3);
  main.variable(observer("createCamera")).define("createCamera", ["require"], function(require){return(
require('https://bundle.run/regl-camera@2.1.1')
)});
  main.variable(observer("glMatrix")).define("glMatrix", ["require"], function(require){return(
require('https://bundle.run/gl-matrix@3.3.0')
)});
  main.variable(observer("createRegl")).define("createRegl", ["require"], function(require){return(
require("regl")
)});
  main.variable(observer("geometric")).define("geometric", ["require"], function(require){return(
require("geometric@2")
)});
  main.variable(observer()).define(["md"], function(md){return(
md ` 
<h1>Report</h1>

<h2>Description</h2>
<p>This project is meant to show off the implementation of backward ray tracing in webgl, more specifically regl. In addition, we’ve demonstrated how the algorithm works through 2D animation done using the D3 JavaScript library.<br/>
</p>
<h2>Implementation</h2>

<h2>Animation</h2>
<p>Most of our code that was related to ray tracing was taken from the “Ray tracing in One Weekend” book. The biggest learning curve was putting everything through d3 and then animating it.
We started with a camera that shot out rays at a sphere at different angles in a simple animation. Soon after, we implemented intersection points with our main sphere. While working on bugs and animation fixes, members began implementing specular, refractive, and diffuse rays.
We overhauled the animation process to allow newly generated rays to move in sync with already cast rays.
Added a wall and floor then started Implementing shadow rays.
Added an occluder.
Fixed refraction rays.
Finished shadow rays and occluder implementation.
</p>

<h2>Ray Tracer</h2>
<p>We initially used “Ray tracing in One Weekend” as our reference to design the ray tracer. Learning how to make the code work in regl took some time getting used to especially making it work with the frag shader and regl camera. Once we were able to render a sphere and improve the camera, we then added a plane and started work on adding diffuse materials.
We were not concerned with the structure of the code until at a certain point in which we realized that our code can definitely benefit from using a data structure for objects that our rays can hit.
The data structure from the book is used in our ray tracer for that purpose. However, the book relied on C++ features that GLSL didn’t have. This was a major reason why we’ve skipped the section of the book pertaining to this topic. However it needed to be done, especially if we were to use multiple objects and individually change their properties. Implementing the data structure required some overhauling and time, but in the meantime, other members were implementing diffuse materials.
Our ray tracer previously borrowed more elements from the book, but we realized that the ray tracer design from the book did not implement features present in backwards ray tracing such as the shadow, reflective, or refractive rays. The shadows generated in the book is a result from ambient occlusion. So another overhaul in algorithmic design was needed to make use of the other rays. We used other resources such as Scratchapixel’s “Light Transport Algorithms and Ray-Tracing Whitted Ray-Tracing,”  to implement these desired features. Furthermore, we followed the design for Whitted Ray Tracing from the original paper to support, with limitations, global illumination from the scene.</p>


<h2>Team Contribution</h2>
Jason Rodriguez - Ray tracing Team Leader
<ul>
<li>Created the initial Observable page and helped implement code from the book to the page.</li>
<li>Added Planes.</li>
<li>Merged code.</li>
<li>Added reflection.</li>
<li>Implemented Axis-Aligned Bounding Boxes algorithm, was used to create the Cornell Box scene.</li>
<li>Implemented converting JSON data into float textures and loading scene data from them.</li>
<li>Worked on refraction</li>
<li>Managed Ray Tracing team</li>
</ul>


Zachary Mallet- Ray tracing team member
<ul>
<li>Worked on Cornell Box and Materials</li>
<li>Merged code</li>
<li>Assisted with sprint planning</li>
</ul>


AJ DeSantis- Ray tracing team member
<ul>
<li>Worked on diffuse and specular material</li>
<li>Worked on data structure for hittable objects</li>
</ul>

Ethan Pritchard - Ray tracing team member
<ul>
<li>Worked on the first animation iteration</li>
<li>Created hittable object structure</li>
<li>Created a collection of hittable objects structure</li>
<li>Created a HitRecord structure to track ray data</li>
<li>Worked on ray intersection methods</li>
</ul>

Brady Hill - Ray tracing + Animation 
<ul>
<li>Helped optimize and clean ray tracer code</li>
<li>Assisted with reflection and generalizing materials (ray tracing)</li>
<li>Extended implementation of shadow rays (animation)</li>
</ul>

Randy Glasgow - Ray tracing + Animation
<ul>
<li>Assisted with the optimization of ray tracer code</li>
<li>Assisted with animation of rays</li>
<li>Assisted with implementation of shadow rays</li>
<li>Assisted with debugging various aspects of animation</li>
</ul>

Marlon Calvo - Ray tracing team member
<ul>
<li>Implemented texturing of spherical and rectangular objects</li>
<li>Implemented data structure and code to allow materials</li>
<li>Implemented whitted ray tracing to supersede RTIOW’s ray tracer</li>
</ul>

Jeff Fortune - Animation Team Member
<ul>
<li>Implemented reflection algorithm and animation</li>
<li>Extended implementation of refraction rays</li>
<li>Assisted with implementation of shadow rays</li>
<li>Polished refraction ray animation</li>
</ul>

Alan Perrow - Ray tracing Team Member
<ul>
<li>Helped in development of initial ray tracer</li>
<li>Implemented original diffuse algorithm including global illumination</li>
<li>Implemented uniforms as loop conditionals for convenience</li>
<li>Helped port old naive Monte Carlo algorithm into new whitted algorithm</li>
<li>Created presentation scene with cornell box</li>
<li>Provided high quality “renders” of scene output</li>
</ul>

Brandon Frateschi - Ray tracing Team Member
<ul>
<li>Created the base Hitable objects for the ray tracer</li>
<li>Helped with the first iteration of the diffuse algorithm</li>
<li>Assisted with random() and noise functions for diffuse lighting</li>
<li>Implemented the Refraction algorithm</li>
<li>Added Fresnel algorithm to mix Refraction and Reflection lighting</li>
</ul>

Michael Ortiz - Animation Team Member
<ul>
<li>Implemented algorithm for ray intersection with spheres, walls, and floor</li>
<li>Implemented shadow rays algorithm</li>
<li>Implemented sphere-sphere ray intersections</li>
<li>Designed overall animation including:</li>
<ul>
<li>Creating the canvas and objects in the scene</li>
<li>Creating the “box” that the scene is contained in</li>
<li>Animating and synchronizing the casting, intersection,  reflection,  refraction, and coloration of the rays</li>
<li>Adding various buttons, sliders, etc that allow user to configure the animation</li>
</ul>
<li>Merged animation notebook with ray tracer notebook</li>
</ul>

Nicolas El Tenn - Animation Member
<ul>
<li>Implementented original object translation animation</li>
<li>Created the light source and helped with the animation</li>
<li>Assisted with debugging refraction animation on the way out</li>
<li>Assisted with the creation of the shadow rays</li>
</ul>

Jordan Edelman - Animation Team Member
<ul>
<li>Implemented refraction algorithm and animation</li>
<li>Implemented diffuse algorithm and animation</li>
<li>Assisted with implementation of shadow rays</li>
</ul>

Jacob Thomas - Animation Team Member
<ul>
<li>Animated the camera’s rays</li>
<li>Assisted with the ray intersection points</li>
<li>Help debug with some rays not intersecting correctly</li>
</ul>

Andrew Obeso - Ray tracing Team Member
<ul>
<li>Helped implement base Whitted ray tracing algorithm</li>
<li>Added shadow rays</li>
<li>Helped implement original simple ray tracing code</li>
</ul>

<h2>References</h2>
<ul>
<li>https://raytracing.github.io/books/RayTracingInOneWeekend.html</li>
<li>https://www.scratchapixel.com/lessons/3d-basic-rendering/introduction-to-shading/reflection-refraction-fresnel</li>
<li>https://www.scratchapixel.com/lessons/3d-basic-rendering/ray-tracing-overview/light-transport-ray-tracing-whitted?url=3d-basic-rendering/ray-tracing-overview/light-transport-ray-tracing-whitted</li>
<li>https://observablehq.com/@stwind/how-raymarching-works</li>
<li>https://www.cs.drexel.edu/~david/Classes/Papers/p343-whitted.pdf</li>
<li>https://www.scratchapixel.com/lessons/3d-basic-rendering/minimal-ray-tracer-rendering-simple-shapes/ray-box-intersection</li>
<li>https://www.rose-hulman.edu/class/csse/csse451/AABB/</li>
<li>https://www.scratchapixel.com/lessons/3d-basic-rendering/minimal-ray-tracer-rendering-simple-shapes/ray-plane-and-ray-disk-intersection</li>
</ul>
`
)});
  return main;
}
