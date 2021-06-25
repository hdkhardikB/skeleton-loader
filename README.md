# Skeleton loader

Implmentation of Basic Skeleton loader with variants.

Should be used as a loader instead of showing conventional page level loader.

This library can be used a `npm` or `yarn` package to `react` web app.

## Install

`yarn install`

## Build

`yarn build`

## Development 

### Start storybook

`yarn storybook`

>it will start storybook on http://localhost:6006/.

## Usage
There are 3 variants of this laoder 

**1. Circle
```jsx
    <SkeletonLoader type="circle" height={200} width={300} />
```
**2. Box

```jsx
    <SkeletonLoader type="box" height={200} width={300} />
```
You can also wrap loader inside element to fill it. Something like this

```jsx
    <h4><SkeletonLoader /><h4>
```
**3. Line
```jsx
    <SkeletonLoader type="line" height={200} width={300} />
```


